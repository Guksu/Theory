import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";

dotenv.config(); //process.env를 사용하기 위해 필요하다.
const app = express();

app.set("port", 3000);

app.use(
  cors({
    //해당 코드는 선택사항
    origin: "locallhost:4000", // 4000번 포트에서만 접속 허용
    credentials: true, //쿠키도 전송 허용 , 이 경우 origin:true로 설정해줘야한다
  })
);
app.use(morgan("dev"));
// app.use(morgan("combined"));   배포시 combined로 더 정확한 정보를 가져온다
app.use(cookieParser()); // get요청이 오면 uri변수들이 파싱되어 req.cookies객체에 저장된다.
app.use(express.json()); // json 데이터를 파싱해서 req Body에 넣어준다
app.use(express.urlencoded({ extended: true })); // 클라이언트에서 form에 데이터를 보낼 때 form을 파싱해주며 extended가 true면 qs모듈을 사용한다  단, 이미지 파일의 경우 multer를 사용해야한다.
app.use(
  session({
    resave: false, //요청이 왔을 때 세션에 수정사항이 생기지 않아도 다시 저장할지 여부
    saveUninitialized: false, // 세션에 저장할 내용이 없어도 저장할지 여부
    secret: "guksu", //세션쿠키암호화
    cookie: {
      httpOnly: true,
    },
    name: "connect.sid", //세션쿠키 이름
  })
); //req.session.id = "hello"와 같이 유저 개개인의 세션을 만들어 관리할 수 있다.
//---------------미들웨어--------------------//
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("나는 미들웨어");
  next();
});

app.use("/about", (req: Request, res: Response, next: NextFunction) => {
  console.log("나는 about에서만 실행되는 미들웨어");
  if (req.params) {
    //otherMiddleware(req,res,next)   이런 방법으로 미들웨어를 확장할 수 있다.
  }
  {
    next();
  }
  next();
});
//---------------------------------------//

app.get("/", (req: Request, res: Response, next: NextFunction) => {});

app.get("/about/:params", (req: Request, res: Response, next: NextFunction) => {
  res.send(`hello ${req.params.params}`);
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "saveImage/"); //업로드 파일 저장경로
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/image/upload", (req: Request, res: Response, next: NextFunction) => {
  // upload.array  하나의 폼 이름에 배열의 파일이 들어가는 경우
  // upload.single 하나의 파일
  // upload.fields  각기 다른 여러파일 업로드 ex) upload.fields([{img:"img1"},{img:"img2"}])
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log("에러미들웨어의 매개변수는 무조건 4개 !");
  res.send("여기는 에러 !");
});

// app.listen(app.get("port"), () => {
//   console.log("3000번 포트에서 실행");
// });

//웹 소켓 사용시 변경되는 부분

const server = app.listen(app.get("port"), () => {
  console.log("3000번 포트에서 실행");
});

new Server(server);

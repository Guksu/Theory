import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

app.set("port", 3000);

app.use(morgan("dev"));
// app.use(morgan("combined"));   배포시 combined로 더 정확한 정보를 가져온다
app.use(cookieParser()); // get요청이 오면 uri변수들이 파싱되어 req.cookies객체에 저장된다.
app.use(express.json()); // json 데이터를 파싱해서 req Body에 넣어준다
app.use(express.urlencoded({ extended: true })); // 클라이언트에서 form에 데이터를 보낼 때 form을 파싱해주며 extended가 true면 qs모듈을 사용한다  단, 이미지 파일의 경우 multer를 사용해야한다.

//---------------미들웨어--------------------//
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("나는 미들웨어");
  next();
});

app.use("/about", (req: Request, res: Response, next: NextFunction) => {
  console.log("나는 about에서만 실행되는 미들웨어");
  next();
});
//---------------------------------------//

app.get("/", (req: Request, res: Response, next: NextFunction) => {});

app.get("/about/:params", (req: Request, res: Response, next: NextFunction) => {
  res.send(`hello ${req.params.params}`);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log("에러미들웨어의 매개변수는 무조건 4개 !");
  res.send("여기는 에러 !");
});

app.listen(app.get("port"), () => {
  console.log("3000번 포트에서 실행");
});

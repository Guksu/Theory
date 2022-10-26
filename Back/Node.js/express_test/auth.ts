import express, { Request, Response, NextFunction } from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import { request } from "http";

const router = express.Router();

router.post("/join", async (req: Request, res: Response, next: NextFunction) => {
  const { email, nick, password } = req.body;
  const findUser = () => {
    return false;
  };
  const createUser = () => {};

  try {
    const exUser = await findUser(); // DB에서 가입된 유저인지 확인
    if (exUser) {
      return res.send("이미 가입된 유저입니다");
    }
    const hash = await bcrypt.hash(password, 12);
    await createUser;
    return res.send("가입되었습니다");
  } catch (error) {
    return next(error);
  }
});

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (authError, user, info) => {
    // passport 폴더의 index.ts 실행 후 done을 반환하면 아래부분이 실행된다.
    if (authError) {
      return next(authError);
    }
    if (!user) {
      return res.send("사용자가 없습니다 따라서 로그인페이지로 이동");
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        return next(loginError);
      }
      return res.send("로그인성공!");
    });
  })(req, res, next); //미들웨어 확장
});

export default router;

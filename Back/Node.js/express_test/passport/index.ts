import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";

export default function passportLogin() {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const findUser = () => {
            return { password: "passowrd" };
          };
          const exUser = await findUser();

          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다" });
            }
          } else {
            done(null, false, { message: "가입되지 않은 사용자입니다" });
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );
}

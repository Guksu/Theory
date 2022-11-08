import { Server } from "socket.io";
import { Express } from "express";

export default function socketRouter(server: any, app: Express) {
  // path는 프론트랑 일치시켜야함
  const io = new Server(server, { path: "/socket.io" });
  app.set("io", io); //req.app.get("io")로 전역변수로 사용 할 수 있음

  //채팅방 생성
  const room = io.of("/room"); //클라이언에서 파라미터로 /room을 지정
  const chat = io.of("/chat"); //클라이언에서 파라미터로 /chat을 지정

  io.on("connection", (socket) => {
    const req = socket.request;
    //클라이언트 ip확인
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    socket.on("disconnect", () => {
      // 연결종료시
    });

    socket.on("error", (error) => {
      //에러 발생시
      console.log(error);
    });

    socket.on("reply", (data) => {
      //클라이언트에서 메세지를 받음
    });

    //클라이언트에게 메세지 보내기
    socket.emit("eventName", "send Msg !");

    // room에게만 적용
    room.on("connection", (socket) => {
      // room 네임스페이스 접속
      socket.on("disconnect", () => {
        // room 접속해제
      });
    });

    chat.on("connection", (socket) => {
      const req = socket.request;
      const {
        headers: { referer },
      } = req;
      const roomId = referer?.split("/")[referer.split("/").length - 1].replace(/\?.+/, "");
      if (roomId) {
        socket.join(roomId);
      }

      socket.on("disconnect", () => {
        if (roomId) {
          socket.leave(roomId);
        }
      });
    });
  });
}

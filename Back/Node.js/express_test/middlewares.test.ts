// 다른 라이브러리를 mocking하는 방법
// jest.mock("라이브러리경로");
// import mockingTarget from "라이브러리경로";
// 추후 사용시    mockingTarget.mockReturnValue(Promise.resolve({promise함수일 경우 반환값}))

test("1+1은 2입니다", () => {
  expect(1 + 1).toEqual(3);
});

describe("테스트 그룹", () => {
  const middlewareEx = (req: any, res: any, next: any) => {};
  const req = {};
  const res: any = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const next = jest.fn();
  test("미들웨어 테스트 방법", () => {
    middlewareEx(req, res, next);
    expect(next).toBeCalledTimes(1);
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith("send메세지");
  });
});

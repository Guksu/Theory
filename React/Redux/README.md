## **Redux**

- redux는 컴포넌트에 종속되지 않고 상태관리를 컴포넌트 바깥에서 한다.
- reducer는 store에 들어갈 state와 state를 바꿀 함수를 정의하며 이는 기본적으로 순수함수로 코딩하여 불변성을 지켜야한다.
- redux는 기본적으로 참조값이 바뀌었는지 확인하고 참조값이 바뀐 경우 리렌더링을 요청한다. 따라서 직접적으로 state를 변경하면 참조값이 변경되지 않아 리렌더링되지 않는다.
- redux는 동기적으로 dispatch가 이루어지기 때문에 비동기적으로 dispatch를 사용하기 위해선 redux-saga와 같은 미들웨어를 사용해야한다.

## **Redux의 원칙**

1. 모든 state는 하나의 store에서 관리해야한다.

2. state는 read-only이어야한다. 즉 state의 변경은 action에 의해서만 가능하다.

3. reducer는 순수함수로 작성되어야한다.

## **Redux-saga**

1. generator

- generator란 함수에 \*를 붙이고 yield라는 문법을 사용한다.

```
const gen = function* () {
 console.log(1);
 yield;
 console.log(2);
 yield;
 console.log(3);
 yield;
 console.log(4)
}
const gener = gen()
// gener() - gener{<suspended>}
gener().next() -> 1
gener().next() -> 2
gener().next() -> 3
gener().next() -> 4
gener().next() -> undifined
```

```
function* watchGenerator() {
    console.log('모니터링 시작!');
    while(true) {
        const action = yield;
        if (action.type === 'HELLO') {
            console.log('안녕하세요');
        }
        if (action.type === 'BYE') {
            console.log('안녕히가세요.');
        }
    }
}

const watch =watchGenerator()
watch.next()            // 모니터링 시작!
watch.next({type:"BYE"}) // 안녕히가세요
watch.next({type:"HELLO"}) // 안녕하세요
```

2. 기본사용법
   출처 : https://react.vlpt.us/redux-middleware/10-redux-saga.html

```
// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(increase()); // put은 특정 액션을 디스패치 해줍니다.
}
function* decreaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(decrease()); // put은 특정 액션을 디스패치 해줍니다.
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
```

- put을 통해 새로운 액션을 디스패치할 수 있다.
- takeEver는 특정 액션 타입에 대하여 디스패치되는 모든 액션들을 처리해주고
- takeLatest는 특정 액션타입에 대하여 디스패치되는 액션 중 가장 마지막만을 처리하는 함수이다.

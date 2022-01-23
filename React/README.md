## **React란?**

- React는 SPA(Single Page Application)를 위해 사용되는 오픈소스 JS라이브러리이다.
- React는 단방향 데이터 흐름을 따르며 UI구성요소를 재사용할 수 있다는 특징이 있다.

## **Virtual DOM이란?**

- Virtual DOM은 애플리케이션의 UI를 구성하는 HTML 엘리먼트를 메모리 내에서 구현한 것이다.
- 컴포넌트가 다시 렌더링될 때 , Virtual DOM은 기존의 DOM모델에서 변경되는 사항을 비교하고 업데이트할 요소의 목록을 만든다.
- 따라서 DOM전체를 다시 렌더링하지 않고 최소한의 부분만 변경하여 효율성을 높일 수 있다.

## **JSX란?**

- JSX는 자바스크립트 문법의 확장이다. JSX는 자바스크립트 함수 호출 방식으로 컴파일되어 컴포넌트에 대한 마크업을 만들 수 있다.

## **클래스 컴포넌트와 함수형 컴포넌트의 차이**

- hooks 도입 이전 , 내부 state를 유지하기 위한 컴포넌트를 생성하거나 lifecycle methods를 활용하기 위해 클래스 컴포넌트를 사용하였다. 또한 함수형 컴포넌트는 state를 갖지 않고 props에만 의존하는 렌더링을 위해 사용되었다.
- 클래스형 컴포넌트는 코드 재사용이 떨어지고 this가 존재하며 코드 최적화가 힘들다.

## **Lifecycle methods**

- componentWillMount: 컴포넌트가 생성된 후 DOM에 렌더링되기 전에 호출된다.
- componentDidMount: 처음으로 렌더링이 끝나고 컴포넌트의 DOM 엘리먼트가 사용 가능할 때 호출된다.
- componentWillReceiveProps: props가 업데이트 될 때 호출된다.
- shouldComponentUpdate: 새로운 props를 받았을 때 호출되며, 성능 최적화를 위해 리랜더링을 막을 수 있다
- componentWillUpdate: 새로운 props를 받았고 shouldComponentUpdate가 true를 리턴할 때 호출된다.
- componentDidUpdate: 컴포넌트가 업데이트된 후에 호출된다.
- componentWillUnmount: 컴포넌트가 DOM에서 제거되기 전에 호출되어 이벤트리스너 등을 정리할 수 있게 해준다.

## **state / props**

- props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터이다. 이는 수정이 불가하다
- state는 lifecycle 동안 수정될 수 있는 내부 데이터이다.
- 이 경우 state를 setState로 변경하지 않고 state를 직접 변경한다면, react는 컴포넌트를 다시 렌더링해야 하는지 알 수 없어 에러가 발생할 수 있다.

## **React Hooks**

1. useCallback

- 특정 함수를 재사용하기 위한 hooks

```
const memoized = useCallback(()=>x+y,[x,y])
```

2. useMemo

```
const sum = ()=>x+y
const memoized = useMemo(()=> sum(),[x,y])
```

- useCallback(fn,deps)는 useMemo(()=>fn,deps)와 같다.
- useMemo는 함수를 반환하지 않고 함수의 값만 memoization해서 반환한다. 그러니 useCallbakc은 함수를 memoization해서 반환한다.

## **React란?**

- React는 SPA(Single Page Application)를 위해 사용되는 오픈소스 JS라이브러리이다.
- SPA는 전체 페이지를 하나의 페이지로 구현한 것으로 동적으로 화면을 바꾸면서 표현하는 것이다.
- 모든 정적 리소스를 클라이언트 브라우저에서 한번에 다운받고 이후 새로운 페이지 요청시 서버단에서 갱신에 필요한 데이터를 받아 갱신한다.
- React는 단방향 데이터 흐름을 따르며 UI구성요소를 재사용할 수 있다는 특징이 있다.

## **Virtual DOM이란?**

- Virtual DOM은 DOM을 메모리 내에서 구현한 것이다.
- 데이터가 업데이트되면 Virtual DOM에 리렌더링을하고 기존의 DOM모델에서 변경되는 사항을 비교하고 업데이트할 요소의 목록을 만든다.
- 따라서 DOM전체를 다시 렌더링하지 않고 최소한의 부분만 변경하여 효율성을 높일 수 있다.

**DOM**

- HTML을 파싱하여 구성요소들(NODE)들을 객체로 구조화하여 나타낸 문서 객체 모델

## **JSX란?**

- JSX는 자바스크립트 문법의 확장이다. JSX는 자바스크립트 함수 호출 방식으로 컴파일되어 컴포넌트에 대한 마크업을 만들 수 있다.

## **클래스 컴포넌트와 함수형 컴포넌트의 차이**

- hooks 도입 이전 , 내부 state를 유지하기 위한 컴포넌트를 생성하거나 lifecycle methods를 활용하기 위해 클래스 컴포넌트를 사용하였다. 또한 함수형 컴포넌트는 state를 갖지 않고 props에만 의존하는 렌더링을 위해 사용되었다.
- 클래스형 컴포넌트는 코드 재사용이 떨어지고 this가 존재하며 코드 최적화가 힘들다.

## **Lifecycle methods**

- componentWillMount: 컴포넌트가 생성된 후 DOM에 렌더링되기 전에 호출된다.
- componentDidMount: 처음으로 렌더링이 끝나고 컴포넌트의 DOM 엘리먼트가 사용 가능할 때 호출된다.
- componentWillReceiveProps: props가 업데이트 될 때 호출된다.
- shouldComponentUpdate: 새로운 props를 받았을 때 호출되며, 성능 최적화를 위해 리랜더링을 막을 수 있다(리렌더링 여부를 결정할 수 있다.)
- componentWillUpdate: 새로운 props를 받았고 shouldComponentUpdate가 true를 리턴할 때 호출된다.
- componentDidUpdate: 컴포넌트가 업데이트된 후에 호출된다.
- componentWillUnmount: 컴포넌트가 DOM에서 제거되기 전에 호출되어 이벤트리스너 등을 정리할 수 있게 해준다.

## **state / props**

- props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터이다. 이는 수정이 불가하다
- state는 lifecycle 동안 수정될 수 있는 내부 데이터이다.
- 이 경우 state를 setState로 변경하지 않고 state를 직접 변경한다면, react는 컴포넌트를 다시 렌더링해야 하는지 알 수 없어 에러가 발생할 수 있다.

## **React Hooks**

- 함수형 컴포넌트에서 클래스형 컴포넌트 기능을 사용할 수 있게한다.

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

3. useState

- 비구조화 할당을 사용하여 첫번째 요소는 현재 상태 , 두번쨰 요소는 setter함수로 동작한다.
- setState는 비동기적으로 작동하기 때문에 setState를 사용하여 상태를 업데이트할 경우 업데이트 된 상태는 즉시 반영되지 않는다. (state변경 -> 리렌더링 -> state반영)
- 비동기적으로 작동하면 여러 state를 동시에 업데이트해도 한번에 렌더링 후 반영되기 때문에 성능면에서 우수하다.
- 동기적으로 작동하면 매업데이트 시 렌더링이 발생하여 비효율적이다.
- 따라서 업데이트된 state를 즉시 반영하기 위해선 useEffect를 사용한다.

4. useEffect

- 컴포넌트가 렌더링될 때마다 특정 작업을 실행할 수 있도록 하는 hook
- 컴포넌트가 마운트 / 언마운트 / 업데이트 됐을 때 , 특정 작업을 처리할 수 있다.
- 첫번째 인수로 실행할 콜백함수 , 두번째 인수로 검사하고자 하는 특정 값이 들어간다.
- 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 작업을 수행하고 싶다면 useEffect내부에 cleanup함수를 반환하면된다. 만약 빈 배열을 넣을 경우에는 언마운트될 경우에만 cleanup함수를 호출한다.

```
useEffect(()=>{
    return ()=>{
        console.log("클린업 !")
    }
})
```

## **key**

- Key는 원소의 변동을 알기 위해 사용된다. key가 없는 경우 가상 DOM을 순차적으로 비교하지만 key가 있으면 이러한 과정을 단축한다.

## **flux**

- MVC패턴의 경우 양방향 데이터흐름이라 규모가 커질수록 복잡해진다. 이러한 문제점 때문에 단방향 데이터 흐름 모델의 아키텍쳐로 flux가 등장했다.

- View => Action => Dispatcher => Store => View 흐름으로 작동한다.

1.  Dispatcher

- 모든 데이터 흐름을 관리한다.

2.  Store

- 애플리케이션의 상태를 저장한다. 모튼 상태 변경은 스토어에 의해 결정된다.

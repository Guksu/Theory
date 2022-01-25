## **렌더링 과정**

1. 사이트에 접속할 경우 DNS(실제 서버가 어디에 있는지 알 고 있는 서버 / Domain Name System)가 연결해준다.

2. index.html을 서버에서 클라이언트로 보내주고 브라우저는 텍스으로 이루어진 index.html파일을 파싱한다.

3. 파싱을하면서 DOM트리를 만들고 중간에 CSS요청이 발생하면 res / req 과정을 거치고 CSS를 파싱한다.

4. CSS파싱이 끝나면 다시 html을 읽으면서 DOM트리를 완성한다.

5. 완성된 DOM트리와 CSSOM트리를 합쳐 Render Tree를 만들고 Painting해준다.

6. 파싱도중 Script태그를 만나면 JS를 먼저 로드하고 파싱하고 실행한다.

## **Promise**

- 비동기처리를 위해 사용되는 패턴이며 Promise는 생성자 함수를 통해 인스턴스화하며 비동기처리에 성공하면 resolve 메소드를 호출하여 비동기 처리 결과를 메소드로 전달한다.
- 비동기 처리에 실패하면 reject메소드를 호출하여 에러메시지를 메소드로 전달한다.

## **Promise와 async / await 차이점**

- Promise는 .catch()문을 통해 에러 핸들링이 가능하지만 async/await는 try-catch()를 활용해야한다.

## **JS 타입**

- JS는 다른 언어들과 달리 정수를 위한 타입이 없고 모든 수를 실수로 처리하기 때문에 number타입만 존재한다.

- 원시타입은 boolean / string / number / undefiend / null / symbol이 존재한다.

- undefiend은 값이 정의되지 않은 것 / null은 값이 비어있는 것

- JS의 객체는 key로 문자형만 받을 수 있다. Map의 경우엔 다양한 타입을 key값으로 받을 수 있다.

## **실행 컨텍스트(Execution Context)**

- JS코드들이 실행되기 위한 환경이다. 전 컨텍스트 / 함수 컨텍스트가 존재한다.

- 전역 컨텍스트가 생성된 뒤 함수를 호출 시 함수 컨텍스트가 생성된다.

- 컨텍스가 생성되면 변수객체 / 스코프체인 / this가 생성되고 함수가 실행되는데 사용되는 변수들은 변수 객체 안에서 값을 찾고 없으면 스코프체인을 따라 올라가며 찾는다.

- 함수 실행이 마무리되면 해당 함수 컨텍스트는 사라지고 페이지가 종료되면 전역 컨텍스트가 사라진다.

## **호이스팅**

- 변수를 선언하고 초기화 했을 때 선언부분이 최상단으로 끌어올려지는 현상

```
console.log(a)
a = 1;
```

- 위의 경우 a는 undefined으로 출력된다. 호이스팅은 함수표현식에선 적용되지 않는다.

```
//정상작용//
sayHi()
function sayHi(){
consol.log("hi")
}
//에러//
sayHi()
let hi = function sayHi(){
consol.log("hi")
}
```

## **클로저**

-https://velog.io/@proshy/JS%ED%81%B4%EB%A1%9C%EC%A0%B8closure%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%B8%EC%9D%98-%EC%82%AC%EC%9A%A9-%EC%98%88%EC%A0%9C

## **This**

- JS의 this는 다른 언어와 다르게 그 값이 런타임에 결정된다.
- 일반 함수의 this 는 전역(window)를 가르키며 화살표 함수의 this는 상위 스코프의 this를 가르킨다.
- call함수는 this를 바인딩하여 함수를 호출하며 두번째 인자를 하나씩 넘긴다.
- apply함수는 this를 바인딩하면서 함수를 호출하며 두번째인자는 배열이다.
- bind함수는 this가 바인딩 된 새로운 함수를 리턴한다.

## **ES6 추가된 스펙**

- let / const / 화살표함수 / 클래스 / 프로미스 / 스프레드 연산자

## **inline /inline-block**

- inline은 text크기만큼 공간을 가지며 width / height가 적용이 불가능
- inline-block은 width / height가 적용되며 기본적으로 text크기만큼 공간을 가진다.

## **가비지 컬렉션**

- JS는 전역변수나 함수의 지역변수 / 매개변수와 같은 루트들이 도달 가능한 값은 메모리에 저장되지만 루트들이 도달 할 수 없는 값은 메모리에서 삭제된다.
- 즉 루트가 참조하고 있는 모든 객체를 방문하고 (mark) , mark된 객체들이 참조하는 객체를 방문하여 mark하는 과정을 거친 뒤 mark되지 않은 모든 객체는 메모리에서 삭제한다.

## **JSON**

- JSON은 객체를 나타내주는 범용 포맷으로 데이터를 교환하는 목적으로 사용한다.
- JSON.stringify – 객체 / 배열 / 원시형을 JSON으로 바꿔준다.
- JSON.parse – JSON을 본래의 값으로 바꿔준다

### **JS 동작원리**

- https://asfirstalways.tistory.com/362
- https://sculove.github.io/post/javascriptflow/

## **렌더링 과정**

1. 사이트에 접속할 경우 DNS(실제 서버가 어디에 있는지 알 고 있는 서버 / Domain Name System)가 연결해준다.

2. index.html을 서버에서 클라이언트로 보내주고 브라우저는 텍스트로 이루어진 index.html파일을 파싱한다.(컴퓨터는 텍스트로 이루어진형태를 인식불가.)

3. 파싱을하면서 DOM(Document Object Model)트리를 만들고 중간에 CSS요청이 발생하면 res / req 과정을 거치고 CSS를 파싱한다.

4. CSS파싱이 끝나면 다시 html을 읽으면서 DOM트리를 완성한다.

5. 완성된 DOM트리와 CSSOM트리를 합쳐 Render Tree를 만들고 Painting해준다.

6. 파싱도중 Script태그를 만나면 JS를 먼저 로드하고 파싱하고 실행한다.

## **비동기**

- 비동기는 동시의 개념이 아닌 순서의 문제다.
- promise와 process.nextTick은 콜백큐의 마이크로에 들어가고 나머지는 매크로에 들어간다. 마이크로와 매크로에 동시에 작업이 들어가면 마이크로가 먼저 콜스택에 쌓인다.

```
const p = new Promise((resolve,reject)=>{
    console.log("이 부분은 동기")
})
console.log("두번째")

new Promise의 함수는 동기로 작동한다.

따라서 위의 코드를 실행하면
"이 부분은 동기"
"두번쨰"
순으로 반환 받는다.
```

## **Promise**

- 프로미스는 쉽게 얘기하면 결과값을 나중에 원할 때 결과값을 사용할 수 있다.
- catch는 then에서 발생한 오류도 잡아낸다.

```
const a = axios.get()
const b = axios.get()
const c = axios.get()
const d = axios.get()

promise.all([a,b,c,d]).then((result)=>{}).catch((error)=>{})

promise.all의 경우 하나의 promise만 에러가 발생하면 모두 작동이 중단된다는 단점이 있다.

이러한 단점을 해결하기 위해 promise.allSettled를 사용한다.

promise.allSettled([a,b,c,d]).then((result)=>{}).catch((error)=>{})

promise.allSettled는 에러가 발생하지 않은 부분은 then에서 활용할 수 있다.

```

- 비동기처리를 위해 사용되는 패턴이며 Promise는 생성자 함수를 통해 인스턴스화하며 비동기처리에 성공하면 resolve 메소드를 호출하여 비동기 처리 결과를 메소드로 전달한다.(resolve는 return의 개념)
- 비동기 처리에 실패하면 reject메소드를 호출하여 에러메시지를 메소드로 전달한다.

## **Promise와 async / await**

- Promise는 .catch()문을 통해 에러 핸들링이 가능하지만 async/await는 try-catch()를 활용해야한다.
- Promise의 then은 await이다.
- await는 반드시 Promise함수에서만 사용 가능하다.
- async 함수는 첫번째 await 직전 까지만 동기부분으로 끝나고(콜스택으로 넘어감) 나머지는 비동기로 넘어간다.(콜백큐)
- async 함수는 항상 Promise를 반환한다.

```
async a()=>{
    return "hi"
}
a.then(result=>console.og("hi"))
```

- for await를 사용하여 resolve된 프로미스들을 반복문처럼 변수에 담을 수 있다.
- for await(변수 of 프로미스배열)

```
const a = Promise.resolve("1")
const b = Promise.resolve("2")

(async ()=>{
    for await (promise of [a, b]){
        console.log(promise)
    }
})();
```

## **JS 타입**

- JS는 다른 언어들과 달리 정수를 위한 타입이 없고 모든 수를 실수로 처리하기 때문에 number타입만 존재한다.

- 원시타입은 boolean / string / number / undefiend / null / symbol이 존재한다.

- 원시값을 변수에 저장하면 메모리 공간에는 실제 값이 저장된다. 그러나 객체는 변경 가능하므로 값이 저장된 메모리 공간의 주소가 변수에 저장된다.
- 따라서 원시 값을 다른 변수에 할당하면 원본 값이 복사되어 전달되며, 객체의 경우에는 해당 메모리 주소가 전달된다.(객체는 참조에 의한 전달이라 한다.)

- undefiend은 값이 정의되지 않은 것 / null은 값이 비어있는 것

- JS의 객체는 key로 문자형만 받을 수 있다. Map의 경우엔 다양한 타입을 key값으로 받을 수 있다.

- js에서 false로 판된되는값을 falsy라 한다. null, 0, undefiend, -0, NaN, false, 빈 문자열이 이에 해당된다.

## **실행 컨텍스트(Execution Context)**

- JS코드들이 실행되기 위한 환경이다. 전역 컨텍스트(전역 스코프) / 함수 컨텍스트(지역 스코프)가 존재한다.

- 전역 컨텍스트가 생성된 뒤 함수를 호출 시 함수 컨텍스트가 생성된다.

- 컨텍스가 생성되면 변수객체 / 스코프체인 / this가 생성되고 함수가 실행되는데 사용되는 변수들은 변수 객체 안에서 값을 찾고 없으면 스코프체인을 따라 올라가며 찾는다.

- 함수 실행이 마무리되면 해당 함수 컨텍스트는 사라지고 페이지가 종료되면 전역 컨텍스트가 사라진다.

- for문은 반복문을 돌 시 스코프가 계속 생긴다.

## **호이스팅**

- 코드가 실행하기 전 변수선언 / 함수선언이 해당 스코프의 최상단으로 끌어 올려지는 현상
- 화살표함수는 호이스팅되지 않는다.

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

- https://velog.io/@proshy/JS%ED%81%B4%EB%A1%9C%EC%A0%B8closure%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%B8%EC%9D%98-%EC%82%AC%EC%9A%A9-%EC%98%88%EC%A0%9C

## **This**

- JS의 this는 다른 언어와 다르게 그 값이 런타임(호출)에 결정된다.
- call함수는 this를 바인딩하여 함수를 호출하며 두번째 인자를 하나씩 넘긴다.
- apply함수는 this를 바인딩하면서 함수를 호출하며 두번째인자는 배열이다.
- bind함수는 this가 바인딩 된 새로운 함수를 리턴한다.

```
funtion(){
    this.~~   //funtion내부를 지칭
}
()=>{
    this.~~  //상위 스코프를 지칭
}
```

## **ES6 추가된 스펙**

- let / const / 화살표함수 / 클래스 / 프로미스 / 스프레드 연산자

## **가비지 컬렉션**

- JS는 전역변수나 함수의 지역변수 / 매개변수와 같은 루트들이 도달 가능한 값은 메모리에 저장되지만 루트들이 도달 할 수 없는 값은 메모리에서 삭제된다.
- 즉 루트가 참조하고 있는 모든 객체를 방문하고 (mark) , mark된 객체들이 참조하는 객체를 방문하여 mark하는 과정을 거친 뒤 mark되지 않은 모든 객체는 메모리에서 삭제한다.

## **JSON**

- JSON은 객체를 나타내주는 범용 포맷으로 데이터를 교환하는 목적으로 사용한다.
- JSON.stringify – 객체 / 배열 / 원시형을 JSON으로 바꿔준다.
- JSON.parse – JSON을 본래의 값으로 바꿔준다

## **이벤트루프**

- JS 엔진은 Memory Heap(메모리 할당)과 Call Stack(LIFO)으로 구성되어 있으며 JS는 단일 스레드 언어이기 때문에 Call Stack이 하나이다.
- Callback Queue는 비동기적으로 실행된 콜뱅함수가 보관되는 영역이다. (FIFO)
- Event Loop는 Call Stack과 Callback Queue의 상태를 체크하여 Call Stack이 빈 상태가 되면 Callback Queue의 첫번째 콜백을 Call Stack으로 넣는다. 이러한 반복적인 행동을 Tick이라 한다.

## **let / const / var**

- var는 함수 스코프로 저장되어 호이스팅이 발생한다.

```
console.log(a) // undefined
var a= a;

console.log(b) // error
const b = b;
```

- var는 함수안의 if문과 같이 블록 스코프에서 선언되어도 함수스코프에서도 사용 가능하다

```
function EX(){
    if(){
        var exVar = "EX"
    }
    console.log(exVar) // EX
}
```

## **Axios / Fetch**

- Axios는 wide browser에서 지원이되지만 Fetch는 지원되는 모델이 한정되어 있다.
- Axios는 자동으로 JSON을 변환시켜준다

## **프로토타입**

- 간단하게 보면 부모의 유전자라고 생각하면 된다.

```
function arr(){
    this.a = 123,
    this.b = 321
}

arr.prototype.wow = 3

const arr2 =  new arr()
console.log(arr2)           // {a:123,b:321}
console.log(arr2.wow)       // 3
```

- 위와 같이 부모요소에 프로토타입을 추가할 경우 자식요소도 그 프로토타입을 사용할 수 있다
- 자식요소에 프로토타입이 없어도 그 부모요소의 프로토타입을 찾기 위해 추적하므로 자식요소에서도 wow를 사용할 수 있다.
- 예를들어 배열의 map / length함수를 사용가능한 이유도 js의Array의 prototype에 이미 함수들이 설정되어 있기 때문이다.

## **이벤트 버블링**

- 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 사위의 화면 요소들로 전달되어 가는 특성

```
<body>
    <div>
        <button />
    </div>
</body>
```

- button에서 이벤트 발생 -> div전달 -> body 전달
- stopPropagation()를 사용하여 버블리을 막을 수 있다.

## **이벤트 캡쳐**

- 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식

```
target.addEventListener('이벤트', 콜백 함수, {capture:ture});
```

- 위의 코드로 이벤트 캡쳐를 사용할 수 있다.

## **Popup**

- window.open함수를 사용하여 팝업을 띄울 수 있지만 주소창을 없애지는못한다.
- iframe을 사용할 경우 addevetLisner로 message를 추가하면 부모창과 자식창과 데이터를 교환할 수 있다

## **화살표함수**

```
아래의 두 함수는 같다.
const sum = (a) =>(b)=> retun {a+b}

funtion sum(a){
    return funtion(b){
        return a+b
    }
}
```

## **동기/비동기/블로킹/논블로킹**

1. 블로킹 / 논블로킹

- 제어권을 넘겨주냐 안 넘겨주냐의 차이
- 블로킹의 경우 부모함수가 자식함수를 호출하고 자식함수에게 제어권을 넘겨준다. 따라서 자식함수의 실행이 완료된 후 부모함수가 다시 실행된다.
- 논블로킹의 경우 부모함수가 제어권을 유지하여 B함수를 호출하고 계속 작업을 이어나간다.

2. 동기 / 비동기

- 자식함수의 작업 완료 여부를 신경쓰느냐의 차이
- 동기에선 자식함수의 결과값을 계속 확인해야한다.
- 비동기에선 자식함수의 결과값에 상관없이 진행하며 자식함수는 결과값을 나중에 전달해준다.

3. 동기-논블로킹 예시

- 게임에서 새로운 맵으로 넘어갈 경우 , 로딩창을 보여주는것
- 동기로 새로운 맵이 불러와지는지는 계속 확인하며(작업완료 확인), 제어권은 부모에게 있으므로 로딩 퍼센티지를 보여줌(제어권은 유지)

## **JS +**

- JS에서 +는 본질적으로 스트링을 결합한다.

```
console.log(1+1+"1")   // 21
console.log("1"+1+1)   // 111
```

## **event.target**

- event.target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치(이벤트 버블링에 의해 발생)
- event.currentTarget : 이벤트가 부착된 부모의 위치

```
<div onClick={alert("heare")}>
    <span>자식</span>
</div>

자식을 클릭해도 alert가 발생하는데 이는 이벤트 버블이에 의해 발생한다.
이 경우, onClick 이벤트의 event.target은 <span>자식</span>이며
event.currentTarget는 <div></div>전체이다.
```

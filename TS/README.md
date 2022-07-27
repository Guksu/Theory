## **TS란**

- TS는 JS를 보완하기 위한 정적타입의 언어이다.
- JS는 런타임(실행)시 에러가 발생하지만 TS는 컴파일시 에러가 발생하여 오류를 찾기가 더 쉽다.
- 그렇지만 JS로 작성된 라이브러리와의 호환문제와 컴파일시 추가적인 시간이 소요된다는 단점이 있다.

## **기본자료형**

- Number / String / Boolean / Null / Undefined / Void

## **다형성**

```
type PrintFn{
    <T> (arr:T[]):void
}

const print : PrintFn = (arr)=>{
    arr.forEach(i=>console.log(i))
}

print([1,2,3])
print(["1","2","3"])
print([1,true,"1"])
--------------------------------------

type PrintArg{
    <T> (arr:T[]):T
}

const print : PrintFn = (arr)=>arr[0]

const a = print([1,2,3])
const b = print(["1","2","3"])
const c = print([1,true,"1"])
```

## **Class**

- 추상클래스는 다른 클래스에서 extends만 할 수 있으며 새로운 객체로 생성은 불가하다.

```
abstract class User{
    constructo(
        private name:string,
        protected age:number,
        // protected는 private처럼 필드에서 사용은 불가하지만 인스턴스에선 사용 가능하다.
        public like :string
    ){}

    getName(){
        return this.name
    }
}

class Player extends User{}

const Human = new Player("Min",29,"Ramen")

Human.name    // private라 접근불가 -> 오류뜸

Human.like   // public이라 접근가능

Human.getName()  // "MIN"
```

## **인터페이스**

- 타입의 경우 형태가 다양하지만(단일 혻은 오브잭트) , 인터페이스는 오직 오브젝트를 위해 사용된다.

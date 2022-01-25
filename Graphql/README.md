## **Graphql이란**

- REST API의 오버페칭 / 언더페칭(하나의 endpoint가 아닌 여러 endpoint가 호출)이란 단점이 해결되는 DB가 아닌 API를 위한 쿼리 언어이다.
- 스키마란 Graphql 서버를 통해 페치 될 수 있는 데이터의 타입의 집합으로 API문서 역할을 한다.

```
type Human{
    name:String!
    age:Number!
}
```

## **REST API와 차이점**

- 하나의 Endpoint가 존재한다. 이는 한번의 네트워크 호출로 언더페칭이 해결된다.
- REST API는 Endpoint마다 SQL쿼리가 달라지지만 Grahqpl은 스키마타입마다 SQL쿼리가 달라진다.

## **N+1문제**

```
query {
	posts {
		id
		title
    contents
    user {...}
	}
}
```

- 위의 경우 posts를 조회하는 쿼리를 실행 할 경우 user데이터를 가져오는 쿼리까지 실행해야하난 N+1문제가 발생한다.
- 이를 해결하기 위해 DataLoader를 사용할 수 있다.
  _DataLoader란?_
  - 일괄 처리 및 캐싱을 통해 DB 또는 웹 서비스와 같은 다양한 원격 데이터 소스 요청에 대한 비용을 줄이는 기능을 한다.
  1. batch
  - 특정 데이터를 가져오기 위한 각각의 요청을 batch(모아서) 한번의 요청으로 해결한다.
  2. cache
  - 모든 요청을 캐싱하지 않고 사용자의 단일 요청별로 생성된다.

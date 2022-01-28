## **Graphql이란**

- REST API의 오버페칭 / 언더페칭(하나의 endpoint가 아닌 여러 endpoint가 호출)이란 단점이 해결되는 DB가 아닌 API를 위한 쿼리 언어이다.
- 스키마란 Graphql 서버를 통해 페치 될 수 있는 데이터의 타입의 집합으로 API문서 역할을 한다.

## **REST API와 차이점**

- 하나의 Endpoint가 존재한다. 이는 한번의 네트워크 호출로 언더페칭이 해결된다.
- REST API는 Endpoint마다 SQL쿼리가 달라지지만 Grahqpl은 스키마타입마다 SQL쿼리가 달라진다.
- REST API는 요청이 단순하지만 데이터응답이 복잡하지만 Graphql은 그 반대이다.

## **schema / resolver**

- schema

```
type Query{
    name:String!
    age:Number!
}
```

- resolver

```
const resolvers ={
  Query:{
    name:()=>"Min",
    age:()=>"29"
  }
}
```

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

**DataLoader란?**

- 일괄 처리 및 캐싱을 통해 DB 또는 웹 서비스와 같은 다양한 원격 데이터 소스 요청에 대한 비용을 줄이는 기능을 한다.

1. batch

- 특정 데이터를 가져오기 위한 각각의 요청을 batch(모아서) 한번의 요청으로 해결한다.

2. cache

- 모든 요청을 캐싱하지 않고 사용자의 단일 요청별로 생성된다.

**Caching**

- 기본적으로 브러우저캐시는 GET요청만 캐싱한다. Graphql은 모든 요청을 POST로 처리하기 때문에 캐싱이 불가능하다. 이를 해결하기 위해 Apollo client를 사용한다.
- Apollo Client는 쿼리를 하였을 경우 결과물을 InMemoryCache 저장한다. 따라서 한번 쿼리를 보낸 경우 또 다른 로딩이 필요하지 않다.

```
import { InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache(options)
});
```

- InMemoryCache구성요소

1. addTypename

- true일 경우 모든 쿼리에 \_\_typename필드가 자동으로 추가된다(default:true)

2. resultCaching

- true일 경우 기본데이터가 변경되지 않는 캐시는 동일한 쿼리를 실행할 때마다 응답 객체를 반환한다(default:true)

3. possibleTypes

- 여러 유형의 스키마간의 관계를 정의하려면 이 개체를 포함해야한다.

4. typePolicies

- type별로 Cache의 동작을 지정하려면 이 개체를 포함해야한다.

## **Polling / Refetching**

- 캐싱된 데이터를 최신으로 유지하는 방법

```
function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    pollInterval: 1000,
  });
```

- 위의 경우 1초마다 쿼리를 보내 server와 동기화 시킨다.

- refetch는 특정 액션이 발생하면 쿼리 결과를 갱신한다.

## **Rest API**

# **Rest란?**

- 서로다른 네트워크간 HTTP Method(get,post...)을 통하여 네트워크간에 자원을 이름으로 저장하여 교환하는 방식으로 자원 / 행위 / 표현으로 구성된다.
- 모든 자원엔 고유 ID가 존재하고 이 자원은 server에 존재한다. (ex)item/1)
- 표현이란 Client가 자원의 조작을 요청하면 server는 이에 JSON, XML등의 방식으로 응답한다.
- Rest API는 모바일, 웹 등 다양한 플랫폼에 범용적으로 적용 가능한 서버를 만들기위한 필요성에따라 등장하게 되었다.
- 이 때문에 Client Side를(플랫폼을) 고려하지 않고 메시지 기반 , XML혹은 JSON과 같은 Client에서 바로 객체로 변환 가능한 데이터 통신을 지향하면서 Restful api를 사용하게되었다.

# **Binary**

- 기본적으로 컴퓨터의 모든 데이터는 binary이다. 이를 필요에 따라 text로 변형해서 사용한다.
- text를 binary로 읽기 위해선 encode하여야 한다.
- 이미지파일은 string으로 저장하지 않고 bytes로 저장해야 한다. 따라서 반드시 binary로 저장해야 한다.

# **Content-tpye**

- 자원의 형식을 명시하기위해 헤더에 실린 정보.

1. Multipart form data

- 모든 문자를 인코딩하지 않음을 명시한다
- 파일 업로드가 있는 양식에서 사용되며 폼데이터가 여러부분으로 나뉘어 서버로 전송된다.
- boundary에 지정되어 있는 문자열로 전송되는 파일 데이터를 구분한다.
- 보통 파일을 서버로 전송하면 바이너리로전송되기 때문에 json방식이 아닌 이 방식을 사용한다.

2. application/json

- json은 서로다른 언어들간 데이터를 주고받을 수 있도록 만들어진 텍스트 기반의 형식이다.
- json은 텍스트로 이루어져 있어 사람 / 기계 모두 이해하기 쉽고 용량이 작다는 장점이 있다.

## **Redux**

- redux는 컴포넌트에 종속되지 않고 상태관리를 컴포넌트 바깥에서 한다.
- reducer는 store에 들어갈 state와 state를 바꿀 함수를 정의하며 이는 기본적으로 순수함수로 코딩하여 불변성을 지켜야한다.
- redux는 기본적으로 참조값이 바뀌었는지 확인하고 참조값이 바뀐 경우 리렌더링을 요청한다. 따라서 직접적으로 state를 변경하면 참조값이 변경되지 않아 리렌더링되지 않는다.
- redux는 동기적으로 dispatch가 이루어지기 때문에 비동기적으로 dispatch를 사용하기 위해선 redux-saga와 같은 미들웨어를 사용해야한다.

# **Redux의 원칙**

1. 모든 state는 하나의 store에서 관리해야한다.

2. state는 read-only이어야한다. 즉 state의 변경은 action에 의해서만 가능하다.

3. reducer는 순수함수로 작성되어야한다.

# **Redux Toolkit과 치이**

- 기존의 리덕스는 엑션생성함수와 액션 타입을 선언하고 리듀서를 따로 만들어 액션에 따라 특정 로직을 리듀서가 실행한다.
- 툴킷은 액션을 선언하고 해당 액션이 dispatch(액션을 스토어에 전달)되면 바로 액션을 처리한다.

## **SSG Vs SSR**

- ssg는 빌드시점에서 사이트 전체를 다시 만들어 전달해주므로 컨텐츠변경이 있을 경우엔 반영되는 시간이 오래걸린다는 단점이 있다.
- ssr은 요청이 올 때마다 해다 웹페이지를 만들기 때문에 변경된 데이터가 즉시 반영되는 장점이있다.

## **SPA란**

- 서버에서 js를 모두 다운받아 보여주기 때문에 동적으로 HTML요소들을 생성하고 조작한다.
- 사용자의 반응에 즉각 대응할 수 있다.

## **NPM이란**

- NodeJS에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소역할을 하며 설치 /관리를 수행할 수 있게해준다.
- package.json으로 의존성 관리를 해준다. 여기에는 프로젝트에 사용되는 패키지의 이름과 버전을 명시하기 때문에 다른 환경에서도 손쉽게 프로젝트를 구성할 수 있다.
- devDependencies는 개발에만 필요한 패키지들을 명시한 곳이다.
- NPM은 패키지를 설치하는 중 코드를 실행시키는 것을 허용하며 의존성까지도 허용하기 때문에 보안의 이슈가 있다.
- NPX는 패키지를 설치하지 않고 1회성으로 실행하는 명령어
- NPM은 패키지별로 서브패키지를 따로 이루는 형식이라 각 설치한 패키지들의 독립성이 보장되지만 패키지 중복으로 용량이 커진다.

## **Yarn이란**

- npm의 보안문제를 해결하기 위해 등장하였다.
- npm은 패키지를 순서대로 설치하지만 yarn은 병렬로 설치하기 때문에 속도가 빠르다.
- 또한 yarn은 한번 설치한 패키지를 캐싱하기 때문에 재설치의 시간을 줄일 수 있다.
  (Cache란 자주 사용하는 데이터나 값을 미리 복사해 놓는 임시 장소)
- yarn은 package.json / yarn.lock에 있는 패키지만 설치하기 때문에 npm에 비해 보안의 장점이 있다.(모든 디바이스에 같은 패키지를 설치)
- yarn.lock에는 패키지를 최조로 추가할 당시 버전을 명시한 파일이다.
- 패키지간 공통 패키지를 링크하기 때문에 패키지 중복이 제거되어 용량이 적다.

## **Axios**

1. async / await를 사용하지 않는경우

```
axios.get('/user?ID=12345').then ~ 혹은
////
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });
```

2. async / await를 사용하는 경우

```
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
``
```

3. useEffect안에서 사용

- useEffect는 함수를 반환해야하지만 axios에 async awiat를 사용하면 Promise를 반환하기 때문에 직접적으로 useEffect에 사용할 수 없다.
- 따라서 아래와 같이 사용해야한다.

```
useEffect(()=>{
  const fn = async() =>{
    const res = await axios ~
  }

  fn()
},[])

```

- 혹은

```
const fn = async()=>{
  const res = await axios ~
}

useEffect(()=>{
  fn()
},[])


```

## **Next JS 동적라우팅**

- 대괄호안의 값은 router객체의 query속성으로 들어간다.
- page/user/[id] 는 user/1로 접근 가능
- page/user/[id]를 user/abc?test=123으로 접근할 경우엔 query Object는 {"id":abc, "test":123}이다.
- page/user/[id]/[product]를 user/1/phone으로 접글할 경우 query Object는 {"id":1, "product":phone}이다.
- page/user/[...param]를 user/1/a/b로 접근할 경우 query Object는 { "param": [1,a,b] }이다/
- page/user[...param]은 user로 접근할 경우 매칭되지 않지만 page/user[ [...param] ]은 user로 접근해도 매칭된다.

## **리엑트 프레임워크**

1. gatsby

- build시 public폴더에 html을생성하여 ssr을 가능하게한다.
- 플러그인을 사용하여 사전 렌더링된 html이 생성되기 전에 데이터를 애플리케이션에 추가할 수 있다.
- 인터렉티브, 정적 웹사이트를 만들때 사용된다. 또한 grphql과 잘 어울린다.

2. remix

- 사용자가 요청 시 서버에서 코드를 실행할 수 있다.

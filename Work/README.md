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

## **getInitialProps / getStaticProps / getStaticPaths / getServerSideProps**

1. getInitialProps

getInitialProps 는 SSR을 위해 사용되는 기능입니다. 그러나 최선버전의 Next.js에서는 getInitialProps사용을 지양하고 있습니다.
getInitialProps를 사용하면 페이지 구성을 위한 데이터 초기값을 미리 요청하여(이하 Data Fetching) SSR이 가능하게됩니다.

그러나 공통된 Data Fetching을 위해 getInitialProps을 \_app.js에서 사용할 경우엔 Next.js는 자동 정적 최적화 기능이 비활성화되어
모든 페이지가 SSR로 제공되는 단점이 있습니다. 즉 정적페이지로 구성하길 원하는 페이지도 동적으로 작동하게됩니다.

Next.js는 정적페이지와 동적페이지 모두를 위한 프레임워크를 지향하기 때문에 최신버전에선 getInitialProps지양하고 있습니다.

하지만 getStaticProps 와 getServerSideProps는 전역적인 Data Fetching을 제공하지 않기 때문에 전역적인 Data Fetching을 위해선
getInitialProps을 사용해야합니다.

2. getStaticProps

getStaticProps는 SSG를 위해 사용되는 기능입니다.
SSG란 빌드시 페이지를 HTML문서로 생성하여 모든 클라이언트측에 동일한 페이지를 보여주는 방식입니다.
따라서 데이터변화가 거의없는 페이지에 주로 활용됩니다.

getStaticProps를 사용하게 되면 빌드시 미리 page를 구성하여 클라이언트에게 보여주기 때문에 초기로딩속도가 빠르다는 장점이있습니다.
그러나 getStaticProps을 사용하여 빌드한 경우에는 이후 데이터 수정이 불가하기 때문에 클라이언트 요청에 따라 응답내용이 달라지는
페이지에선 사용하지 못합니다.

3. getStaticPaths

getStaticPaths는 SSG를 활용하여 페이지를 구성할 경우 동적라우팅을 위해 사용되는 기능입니다.

Next.js는 자체적으로 동적라우팅기능을 제공하고 있으므로 getStaticProps를 사용하여 정적페이지를 구성할 경우
이러한 페이지의 동적라우팅경로를 getStaticPaths를 사용하여 지정할 수 있습니다.

4. getServerSideProps

getServerSideProps는 SSR을 위해 지원되는 기능입니다.
SSR이란 클라이언트의 요청이 있을 경우마다 서버에서 그 요청에 따른 HTML을 작성하여 보내주는 방식입니다.
따라서 SSG와 달리 항상 최신 데이터를 유지할 경우 SSR을 사용합니다.

getServerSideProps는 클라이언트의 요청이 있는 경우에 HTML을 작성하여 보내주기 때문에 SSG방식보다 로딩속도가 느리고,
한번 빌드된 페이지도 매 요청시 다시 실행되어 제공된다는 단점이 존재합니다.

## **코드스플리팅**

Next.js 는 dynamic import기능을 지원하는데 이를 사용하면 모듈을 빌드시가 아닌 런타임에 불러오므로 로딩시간을 줄일 수 있습니다.

dynamic import을 사용하지 않는경우에는 클라이언트가 요청한 페이지에서 클라이언트가 사용하지 않을 컴포넌트도 한꺼번에 로드되기 때문에
초기 로딩시간이 느려질 수 있습니다.

그러나 dynamic import을 사용하면 마치 CSR처럼 클라이언트가 요청할 때에멘 해당 컴포넌트가 로드되기 때문에 초기로딩시간이 감축되는 효과가 나타납니다.

## **Next.js 작동방식**

기존의 React의 경우에는 CSR방식을 사용하여 서버에서 빈 HTML을 클라이언트측에 넘겨주므로 검색엔진 최적화에 좋지 못하다는 단점이 있습니다.

Next.js는 기본적으로 pre-rendering을 지향합니다.
pre-rendering이란 기존의 CSR방식과는 달리 서버에서 미리 HTML을 구성하여 클라이언트측에 제공합니다. 따라서 검색엔진최적화에 효과적입니다.

Next.js의 작동순서는 다음과 같습니다.

1. \_app.tsx파일이 실행됩니다.

\_app.tsx는 전체페이지 레이아웃과 같이 모든 페이지에 공통으로 들어갈 내용이 포함되어있습니다.
\_app.tsx가 Props로 받는 Component는 클라이언트가 요청한 페이지이고 ,
pageProps는 getInitialProps, getStaticProps, getServerSideProps를 통해 받은 props를 의미합니다.
\_app.tsx에 Content가 존재하면 이들을 먼저 실행하고 HTML의 body부분으로 구성합니다.

2. 클라이언트측에서 요청한 Page Component가 렌더링됩니다.

3. \_document.tsx가 실행됩니다.

\_document.tsx에는 static HTML을 구성하기위해 \_app.tsx에서 구성한 HTML의 body가 어떤 형태로 들어갈지 구성합니다.
또한 공통적으로 사용될 <head>나 <body>내용들을 작성합니다.

## **리엑트 프레임워크**

1. gatsby

- build시 public폴더에 html을생성하여 ssr을 가능하게한다.
- 플러그인을 사용하여 사전 렌더링된 html이 생성되기 전에 데이터를 애플리케이션에 추가할 수 있다.
- 인터렉티브, 정적 웹사이트를 만들때 사용된다. 또한 grphql과 잘 어울린다.

2. remix

- 사용자가 요청 시 서버에서 코드를 실행할 수 있다.

## **Login방식**

1. 세션

- 유저가 로그인을 시도하면 서버는 세션을 생성한다.
- 세션을 생성후 서버는 클라이언트에게 아이디를 전달하고 클라이언트는 아이디를 브라우저에 저장한다.
- 이후 인증이 필요한 경우 클라이언트에 저장된 id를 서버에 전달하고 서버는 유효성체크를한다.\

2. JWT

- 로그인을 시도하면 서버에서 JWT를 생성하고 refresh 토큰과 access 토큰을 클라이언트에 전달한다.
- accessToken은 일정시간이 지나면 만료되며 refreshToken을 서버로 보내면 그때마다 새로운 accessToken을 발급해준다.

# **쿠키**

- 서버가 브라우저에 전송해주며 브러우저는 쿠키를 저장해놓고 동일한 서버에 재요청시 함께 전송한다.
- 이는 동일한 브라우저에서 들어왔는지를 판단할 때 사용한다.
- 요즘은 저장소를 사용해 정보를 저장하는걸 권장한다.
- 모든 요청마다 쿠키가 함께 전송되면 성능이 떨어지는 원인이 될 수 있기 때문이다.
- HTTPOnly 쿠키는 XSS공격을 방지하기 위해 사용되며 JS내의 document.cookie API에 접근할 수 없다.

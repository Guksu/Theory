## **기초**

- 네트워트란 컴퓨터끼리 서로 데이터를 전송할 수 맀는 통신망이다.
- 패킷은 네트워크 통신을 할 때 사용되는 작게 분할된 데이터 조각으로 네트워크에서 전송하는 데이터의 기본 단위이다.
- 랜(local area network)은 가까운 거리에 위치한 장치들을 서로 연결한 네트워크를 말한다.
- 왠(wide area network)는 랜을 다시 하나로 묶은 거대한 네트워크로넓은 범위를 연결하는 네트워크를 뜻한다
- DMZ는 외부네트워크와 내부네트워크 사이에 위치한 중간지대를 뜻한다
  네트워크의 보안 영역으로 외부 공격자가 네트워크에 침투하는 것을 막는 역할을 한다.
- 프로토콜이란 통신을 하기 위한 규칙이다.
- TCP/IP모델은 응용,전송,인터넷,네트워크 접속 게층으로 이루어져있다.

### **HTTP의 GET과 POST 비교**

**GET**

- GET 방식은 요청하는 데이터가 HTTP Request Message의 Header 부분에 url 이 담겨서 전송된다. 때문에 url 상에 ? 뒤에 데이터가 붙어 request 를 보내게 되는 것이다. 이러한 방식은 url 이라는 공간에 담겨가기 때문에 전송할 수 있는 데이터의 크기가 제한적이다. 또 보안이 필요한 데이터에 대해서는 데이터가 그대로 url 에 노출되므로 GET방식은 적0절하지 않다.

**POST**

- POST 방식의 request 는 HTTP Request Message의 Body 부분에 데이터가 담겨서 전송된다. 때문에 바이너리 데이터를 요청하는 경우 POST 방식으로 보내야 하는 것처럼 데이터 크기가 GET 방식보다 크고 보안면에서 낫다.(하지만 보안적인 측면에서는 암호화를 하지 않는 이상 고만고만하다.)

- 그렇다면 이러한 특성을 이해한 뒤에는 어디에 적용되는지를 알아봐야 그 차이를 극명하게 이해할 수 있다. 우선 GET 은 가져오는 것이다. 서버에서 어떤 데이터를 가져와서 보여준다거나 하는 용도이지 서버의 값이나 상태 등을 변경하지 않는다. SELECT 적인 성향을 갖고 있다고 볼 수 있는 것이다. 반면에 POST 는 서버의 값이나 상태를 변경하기 위해서 또는 추가하기 위해서 사용된다.

- 부수적인 차이점을 좀 더 살펴보자면 GET 방식의 요청은 브라우저에서 Caching 할 수 있다. 때문에 POST 방식으로 요청해야 할 것을 보내는 데이터의 크기가 작고 보안적인 문제가 없다는 이유로 GET 방식으로 요청한다면 기존에 caching 되었던 데이터가 응답될 가능성이 존재한다. 때문에 목적에 맞는 기술을 사용해야 하는 것이다.

### **HTTP와 HTTPS**

**HTTP란**

- 클라이언트와 서버의 데이터전송 프로토콜(규칙)
- HTTP는 클라이언트의 요청을 받고 서버가 응답을하면 그 연결을 끊어버려서 서버는 매 요청시 사용자가 누군지 확인해야하는 단점이있다. 이를 보완하기 위해 쿠키와 웹스토리지를 사용한다.

**HTTPS**

- HTTPS는 SSL 의 껍질을 덮어쓴 HTTP 라고 할 수 있다. 즉, HTTPS 는 새로운 애플리케이션 계층의 프로토콜이 아니라는 것이다. HTTP 통신하는 소켓 부분을 SSL(Secure Socket Layer) or TLS(Transport Layer Security)라는 프로토콜로 대체하는 것 뿐이다. HTTP 는 원래 TCP 와 직접 통신했지만, HTTPS 에서 HTTP 는 SSL 과 통신하고 SSL 이 TCP 와 통신 하게 된다. SSL 을 사용한 HTTPS 는 암호화와 증명서, 안전성 보호를 이용할 수 있게 된다.

HTTPS 의 SSL 에서는 공통키 암호화 방식과 공개키 암호화 방식을 혼합한 하이브리드 암호 시스템을 사용한다. 공통키를 공개키 암호화 방식으로 교환한 다음에 다음부터의 통신은 공통키 암호를 사용하는 방식이다.

## **HTTP Header**

- 헤더는 body 및 res/req에 대한 정보를 포함한다.

1. 일반헤더

- body컨테츠와 관련이 없고 res/req 생성된 날짜 및 시간등 일반적인 정보가 포함된다.

2. 요청 / 응답 헤더

- 요청항 URL , 메소드 등 정보가 포함된다.

3. 엔티티 헤더

- body 데이터를 해설할 수 있는 정보가 포함된다.

## **HTTMP Body**

- 메세지 본문을 통해 데이터를 전달하며 메세지 본문을 payload라 한다.

### **Cookie & Session**

**저장 위치**

- 쿠키 : 클라이언트의 웹 브라우저가 지정하는 메모리 or 하드디스크
- 세션 : 서버의 메모리에 저장

**만료 시점**

- 쿠키 : 저장할 때 expires 속성을 정의해 무효화시키면 삭제될 날짜 정할 수 있음
- 세션 : 클라이언트가 로그아웃하거나, 설정 시간동안 반응이 없으면 무효화 되기 때문에 정확한 시점 알 수 없음

**리소스**

- 쿠키 : 클라이언트에 저장되고 클라이언트의 메모리를 사용하기 때문에 서버 자원 사용하지 않음
- 세션 : 세션은 서버에 저장되고, 서버 메모리로 로딩 되기 때문에 세션이 생길 때마다 리소스를 차지함

**용량 제한**

- 쿠키 : 클라이언트도 모르게 접속되는 사이트에 의하여 설정될 수 있기 때문에 쿠키로 인해 문제가 발생하는 걸 막고자 한 도메인당 20개, 하나의 쿠키 당 4KB로 제한해 둠
- 세션 : 클라이언트가 접속하면 서버에 의해 생성되므로 개수나 용량 제한 없음

**캐시**

- 쿠키와 같이 클라이언트에 저장되는 파일이지만 이미지 같이 재사용성이 높거나 용량이 큰 데이터를 저장하기 위한 목적

**웹스토리지**

- 클라이언트에 데이터를 저장하지만 저장한 데이터는 서버로 넘어가지 않는다.
- key / value형태로 저장

**EX**

- 자동 로그인 -> 로컬스토리지

- 입력 폼 정보 -> 세션스토리지

- 비로그인 장바구니 -> 세션스토리지

- 다시 보지 않음 팝업 창 -> 쿠키

## **HTTP 상태코드**

- 1xx(정보) : 서버가 요청을 받았으며 클라이언트는 작업을 계속 진행하라는 코드

1.  100 continue : 진행중임을 나타내는 코드

2.  101 switching protocol : 클라이언트가 보낸 요청 헤더에 대한 응답을 서버에서 프로토콜을 변경할 것임을 알려준다. 이 코드는 websocket 프로토콜 전환시에 사용된다.

3.  102 processing : 서버가 요청을 수신하였지만 아직 응답을 알려줄 수 없는 상태

- 2xx(성공)

1.  200 ok : 요청이 성공적으로 전송되고 그에 대한 응답이 반환

2.  201 created : 요청이 성공적이었으며 그 결과로 새로운 리소스가 생성 / 보통 POST 혹은 PUT요청 이후에 나타난다.

3.  202 accepted : 요청이 성공적으로 접수되었으나 아직 해당 요청에 대해 처리중이거나 처리 시작 전임을 의미하는 코드

- 3xx(리다이렉션) : 요청 완료를 위한 추가 작업이 필요

- 4xx(클라이언트 오류)

1.  400 bad request : 잘못된 문법으로 서버가 요청을 이해할 수 없다.
2.  401 unauthorized : 클라이언트가 요청에 대한 응답을 받기 위한 인증이 되지 않은 상태
3.  403 forbidden : 클라이언트가 콘텐츠에 접근할 권리를 가지고 있지 않다.
4.  404 not found : 서버가 요청받은 리소스를 찾을 수 없는 상태
5.  405 : 요청한 HTTP Method를 지원하지 않음

- 5xx(서버 오류)

1.  500 : 서버에 문제가 있지만 정확한 문제는 파악 불가능
2.  501 : 서버가 요청을 이행하는 데 필요한 기능을 지원하지 않는다.
3.  502 : 서버가 게이트웨이로부터 잘몬된 응답을 수신
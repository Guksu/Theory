# **1장**

- setTimeout(콜백함수,0)으로 오래걸리는 작업을 논블로킹으로 만들어서 처리할 수 있다.
- nodeJs는 싱글스레드 기반이다(실제로는 멀티스레드지만 컨트롤 가능한것은 하나). 따라서 한번에 하나의 작업만 처리할 수 있지만 논블로킹으로 보완할 수 있다.
- nodeJs는 멀티프로세싱 방식으로 여러가지 작업을 동시에 처리할 수 있다.
- 프로세스는 운영체제에서 할당하는 작업이며 스레드는 프로세스 내부에서 실행되는 작업의 단위이다.
- node는 멀티스레드에 비해 컴퓨터 자원을 적게 사용하지만 CPU 코어를 하나만 사용한다는 단점이 있다.
- 노드는 I/O가 많은 작업에 적합하다.
- node 작업시간 확인방법

```
console.time("작업시작")
작업시작함수실행()
console.timeEnd("작업시작")
```

# **3장**

- 동기/비동기 : 함수가 바로 return 되는지 여부
- 블로킹/논블로킹 : 백그라운드 작업 완료 여부
- 노드에서는 대부분 동기-블로킹 및 비동기-논블로킹 방식을 사용한다.

# **4장**

- 이벤트루프란 호출스택 / 백그라운드 / 태스크 큐가 순환되는 JS동작방식
- 비동기 작업은 백그라운드로 이동하여 비동기 실행된다. 이 후 , 작업이 완료후 태스크 큐로 이동된다.
- NODE에서 백그라운드에서 실행할 수 있는 작업은 한정되어있다.
- Promise는 then 전 까지는 동기적으로 실행된다. 따라서 then에 있는 작업이 백그라운드로 이동한다.
- async 함수도 첫번째 await전 까지는 동기로 실행되며 await이후는 비동기로 작업된다.
- setTimeout보다 Promise작업이 태스크큐에서 콜스택으로 먼저 넘어간다.
- setImmediate는 setTimout(()=>{},0)과 거의 같다고 보면된다.(즉, 백그라운드로 넘기고 즉시 실행시킨다.)

# **5장**

- 패키지 버전의 첫자리는 major버전을 뜻한다. 주로 첫자리가 바뀌면 이전 버전 작업물은 최신버전에서 호환되지 않을 가능성이 크다.
- 두번째 자리는 minor버전이다. 두번쨰 자리가 바뀌어도 하위버전은 상위버전에서 호환되어야한다.
- 새번쨰 자리는 patch이다. 간단한 수정이 있는 경우 변경된다.
- npm설치시 ^가 포함되면 상위버전중 minor버전까지만 설치한다.
- ~가 포함되면 patch버전까지만 설치한다.

# **8장**

- SQL 특징

```
1. 규칙에 맞는 데이터 입력
2. 테이블간 JOIN 지원
3. 트랜잭션 지원
4. 안정성,일관성
```

- NoSQL 특징

```
1. 자유로운 데이터 입력
2. 컬렉션 간 JOIN 미지원
3. 트랜잭션 미지원(몽고DB 최신버전은 지원?)
4. 확장성, 가용성
```

# **Module**

```
const a = "111",
const b = "222,

module.export={
    a,  // a:a
    b  // b:b
}

------------------
다른 파일에서
const c = require("파일명")
으로 사용 가능하다.
```

- import는 항상 코드의 처음에 실행된다.
- require는 선언한 위치에서 실행된다. 따라서, 조건문 및 반복문에서도 사용 가능하다.
- pakage.json에서 "type": "module"을 추가해주면 import from을 사용 가능하다

# **암호화**

- 암호화는 복호화가 가능하여 해킹에 취약하다.
- 따라서 비밀번호를 해시처리(SHA512 알고리즘이 현재는 안전)를 하여 복호화가 불가능하게 하는것이 일반적이다

# **fs모듈**

- 파일시스템에 접근하는 모듈
- 읽기 사용방법 1

```
const fs = require("fs")

fs.readFile("./파일경로",(err,data)=>{
    if(err){
        thore err;
    }
})
```

- 읽기 사용방법 2

```
const fs = require("fs").promises

fs.readFile("./파일경로")
    .then(()=>{})
    .catch(()=>{})
```

- 쓰기 사용방법

```
const fs = require("fs").promises

fs.writeFile("./파일경로(이름)","내용입력")
    .then(()=>{
        return ;
    })
    .catch(()=>{})
```

- 버퍼 : 일정한 크기로 모아두는 데이터 / 일정한 크기가 되면 한번에 처리
- 스트림 : 데이터 흐름 / 일정한 크기로 나눠서 여러번에 걸쳐서 처리
- 스트림 방식이 메모리 사용이 적어 효율적이다.

# **HTTP**

```
const http = require("http")
http.createServer((req,res)=>{
    //해당 코드로 http 서버를 만들 수 있다.
    res.writeHead(200,{"Content-Type:"text/html; charset=utf-8"})
    res.writeHead(200,{"Set-Cookie:"cookie=good"})
    res.write("<p>hello</p>")
    res.end
}).listen(8080,()=>{
    conssole.log("서버실행")
})

```

- 기본적으로 https는 434포트가 적용되며 http는 80번 포트가 적용된다.(해당 포트는 생략되어 보여짐)

- HTTPS를 사용하는 경우 다음의 코드를 추가해야한다.

```
const https = requre("https")
const fs = require("fs")

htpps.createServer({
    // readFileSync를 사용하여 동기식으로 인증서를 호출
    cert:fs.readFileSync("도메인 인증서 경로"),
    key:fs.readFileSync("도메인 비밀키 경로"),
    ca:[
        fs.readFileSynce("상위 인증서 경로"),
        fs.readFileSynce("상위 인증서 경로"),
    ],
},(req,res)=>{
        res.writeHead(200,{"Content-Type:"text/html; charset=utf-8"})
        res.writeHead(200,{"Set-Cookie:"cookie=good"})
        res.write("<p>hello</p>")
        res.end
}
).listen(8080,()=>{
    conssole.log("서버실행")
})
```

# **cluster**

- 싱글스레드인 노드가 CPU코어를 모두 사용하게해준다(기본은 하나만 사용)
- 단 , 컴퓨터자원(메모리,세션)은 공유 못 함

```
const cluster = rquire("cluster")
const numCPUs = require("os").cpus().length

if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디: ${process.pid}`)
    //CPU 개수만큼 워커를 생산
    for(let i =0;, i<numCPUs; i++){
        cluster.fork()
    }

    //워커가 종료된 경우
    cluster.on("exit",(worker,code,signal)=>{
        console.log(`${worker.process.fid}번 워커가 종료됨`)
        cluster.fork();
    })
}else{
    // 워커들이 포트에서 대기
    http.createServer((req,res)=>{
    //해당 코드로 http 서버를 만들 수 있다.
    res.writeHead(200,{"Content-Type:"text/html; charset=utf-8"})
    res.writeHead(200,{"Set-Cookie:"cookie=good"})
    res.write("<p>hello</p>")
    res.end
}).listen(8080,()=>{
    conssole.log(`${process.pid}번 워커 실행)
})

}
```

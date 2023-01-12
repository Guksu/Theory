# **axios요청**

- app파일에 다음의 코드를 추가하여 baseUrl을 컨트롤 할 수 있다.

```
Axios.default.baseURL = process.env.NEXT_PUBLIC_SERVER_URL
```

- nextJS는 env파일내용에 NEXT_PUBLIC으로 시작한다

- Next.js의 Link 및 router는 CSR로 작동한다. 또한 URL로 직접 접근하는 경우에는 SSR이 작동된다.

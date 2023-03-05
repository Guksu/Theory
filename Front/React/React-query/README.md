## **React-query란**

- 서버 상태를 다루는 라이브러리이다.
- fetch된 데이터는 staleTime이후 stale상태로 변견된다.
- staleTime의 기본값은 0이며, 지정된 시간동안을 fresh상태라한다.
- fresh상태일땐 , 쿼리 인스턴스가 새로 mount되어도 fetch가 일어나지 않는다.

- cacheTime은 데이터가 inactive 상태일 때 캐싱된 상태로 남아있는 시간이다.
- cacheTime이 지나면 해당 데이터는 가비지컬렉션으로 이동한다.
- 쿼리 인스턴스가 unmount될때 inactive상태로 변경되며 캐시는 cacheTime만큼 유지된다.
- cacheTime이 유효한 시간에는 fetch가 되는 동안 해당 데이터를 보여준다.(빈화면 방지)

- staleTime이 cacheTime보다 길어도, cacheTime이 지나면 데이터는 가비지컬렉션으로 이동하므로, staileTime보다 cacheTime이 더 길어야한다.

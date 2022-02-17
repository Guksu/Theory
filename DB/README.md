## **MySQL명령어**

1. 조회

- SELECT \* FROM 테이블명 //전체조회
- SELECT 컬럼명 FROM 테이블명 //특정 컬럼 조회
- SELECT 컬럼명 , 컬럼명 FROM 테이블명 // 여러 컬럼 조회
- SELECT \* FROM 테이블명 WHERE age >19 // WHERE을 사용하여 특정 조건에 맞는 테이터만 조회
- SELECT \* FROM 테이블명 WHERE age >19 AND age <25
- SELECT \* FROM 테이블명 WHERE age >19 or age <12
- SELECT \* FROM 테이블명 WHERE age >19 =(SELECT 컬럼명 FROM 테이블명 WHERE NAME LIKE `KIM%` ) / SUB-QUERY
  //아래의 두 쿼리는 같은 쿼리문이다.
- SELECT \* from 테이블명 WHERE age = 19 or age = 20 or age = 21
- SELECT \* from 테이블명 WHERE age IN(19,20,21)

2. LIKE

- LIKE의 뒤에 문자열 %는 앞의 문자열에 일치하는 모든 데이터를 가져오고 \_의 경우엔 한 글자만 일치하는 데이터를 가져온다.

3. DISTINCT

- SELECT DISTINCT 컬럼명 FROM 테이블명 // 중복값은 하나만 추출한다.

4. ORDER BY

- SELECT \* FROM 테이블명 ORDER BY 컬럼명 ASC
- ASC은 올림차순 / DESC는 내림차순 (DEFAULT값은 ASC)
  // LIMIT을 사용하여 상위 N개만 가져올 수 있다.
- SELECT \* FROM 테이블명 ORDER BY age LIMIT 10

5. 추가

- INSERT INTO 테이블명 (컬럼명) VALUES (값)

6. 수정

- UPDATE 테이블명 SET 컬럼명=수정값 WHERE 조건

7. 삭제

- DELET FROM 테이블명 WHERE 조건

## **express에서 쿼리문**

```
const db = mysql.creactConnection({
    host : ,
    user : ,
    passowrd : ,
    database :
})

app.post("/",(req,res)=>{
    const user_id = req.body
    db.query(INSERT INTO new_table (user_id) values(?)", [user_id])
})
```

## **식별/비식별관계**

1. 식별 관계

- 부모 테이블의 기본키나 유니크 키를 자식 테이블이 자신의 기본키로 사용한다.
- 데이터의 정합성 유지를 DB에서 검증가능하나 구조 변경에 어려움이 있다.

2. 비식별 관계

- 부모 테이블의 기본키나 유니크 키를 자식 테이블이 외래키로 이용한다. 즉, 부모 데이터가 없어도 자식 테이블에 데이터를 추가할 수 있다.
- 구조변경에 자유롭지만 데이터 정합성을 위한 로직이 따로 필요하다.

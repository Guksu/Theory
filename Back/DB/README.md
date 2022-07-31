# **MySQL명령어**

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

# **express에서 쿼리문**

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

# **식별/비식별관계**

1. 식별 관계

- 부모 테이블의 기본키나 유니크 키를 자식 테이블이 자신의 기본키로 사용한다.
- 데이터의 정합성 유지를 DB에서 검증가능하나 구조 변경에 어려움이 있다.

2. 비식별 관계

- 부모 테이블의 기본키나 유니크 키를 자식 테이블이 외래키로 이용한다. 즉, 부모 데이터가 없어도 자식 테이블에 데이터를 추가할 수 있다.
- 구조변경에 자유롭지만 데이터 정합성을 위한 로직이 따로 필요하다.

# **조인**

- 조인은 두 개 이상의 테이블을 연결하여 하나의 테이블처럼 출력할 때 사용한다.
- 조인 조건이 없는 경우에는 출력 결과로 나올 수 있는 모든 행을 조합하여 출력하기 때문에 원하는 결과값이 안 나올 수 있다.

1. 등가조인 (내부조인 inner join)

- 테이블을 연결 후 출력 행을 각 테이블의 특정 열에 일치한 데이터를 기준으로 선정하는 방식이다.
- 조인 조건이 되는 각 테이블의 열 이름이 같을 경우엔 테이블을 구분하여 열 이름을 명시해줘야 오류가 발생하지 않는다.

2. 외부조인(outer join)

- 두 테이블 간 조인 수행에서 조인 기준 열의 어느 한쪽이 null이여도 강제로 출력하는 방식이다.
- 1. 왼쪽 외부조인
- 왼쪽열을 기준으로 오른쪽열의 데이터 존재 여부에 상관없이 출력하라는 뜻

```
WHERE TABLE.COL1 = TABLE2.COL1(+)
```

- 2. 오른쪽 외부조인
- 오른쪽열 기준으로 왼족열의 데이터 존재 여부에 상관없이 출력하라는 뜻

```
WHERE TABLE.COL1(+) = TABLE2.COL1
```

# **9장**

- 서브쿼리는 다음과 같이 사용된다

```
SELECT column FROM table WHERE (SELECT column FROM table WHERE~)
```

- 특수한 경우를 제외하고 서브쿼리에서는 ODER BY절을 사용할 수 없다.

### **단일행 서브쿼리**

- 실행 결과가 단 하나의 행으로 나오는 서브쿼리다.
- 주로 연산자(>,<,=)와 함께 사용된다.

### **다중행 서브쿼라**

- 실행 결과 여러행이 나오는 서브쿼리다
- IN, ANY,SOME,ALL,EXISTS와 같은 다중행 연산자와 사용한다.

```
- IN : 메인쿼리의 데이터가 서브쿼리의 결과 중 하나라도 일치하면 true
- ANY & SOME : 메인쿼리의 조건식을 만족하는 서브쿼리의 결과가 하나 이상이면 true
- ALL : 메인쿼리의 조건식을 서브쿼리의 결과 모두가 만족하면 true
- EXISTS : 서브쿼리의 결과가 존재하면 true
```

### **다중열 서브쿼리**

- 서브쿼리의 SELECT절에 비교할 데이터를 여러 개 지정하는 방식이다.

### **WITH절**

- 별칭을 정하는 경우 다음과 같이 사용할 수 있다.

```
WITH
E10 AS (SELECT* FROM EMP WHERE DEPTNO =10),
D AS (SELECT * FROM DEPT)
SELECT E10.NAME, E10.SAL, D.NAME, D.LOC
FROM E10, D
WHERE E10.NUM = D.NUM
```

# **10장**

- 날짜 데이터를 입력시 TO_DATE함수를 사용하는것이 좋다

```
INSERT INTO TABEL (COL1) VALUES TO_DATE(`2022-05-25`,`YYYY-MM-DD`)
```

- 현재날짜를 입력할 경우 SYSDATE를 사용하면된다.
- INSERT문에서 서브쿼리를 사용할 때 VALUES절은 사용하지 않는다.

```
INSERT INTO TABLE (COL1,COL2)
SELECT COL1, COL2
FROM TABLE
WHERE ~
```

# **11장**

- 트랜잭션이란 더 이상 분할할 수 없는 최소 수행 단위를 뜻한다.
- 트랜잭션은 하나의 트랜잭션 내에 있는 여러 명령어를 한 번에 완료하거나 수행하지 않는다.(ALL OR NOTNING)
- TCL을 실행할 때 기존 트랜잭션이 끝난다.
- ROLLBACK; 명령어를 통해 트랜잭션을 취소시킨다.
- COMMIT;으로 작업을 반영한다.
- 하나의 세션에서 조작중인 데이터는 트랜잭션이 완료되기 전 까지 다른 세션에서 조작할 수 없다. 이러한 상태를 LOCK이라한다.

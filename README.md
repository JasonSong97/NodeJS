# Node.js

## 배운 내용

### 1. HTML, CSS

- `HTML`
  - HTML 구성요소 3가지
- `CSS`
  - `CSS 사용방법 3가지`
    - css 파일로 분리하여 사용할 수 있는 외부 스타일 시트
    - html 코드 내에 포함하여 사용하는 내부 스타일 시트(V)
    - 각 태그 문장마다 설정할 수 있는 케이스별 스타일 시트
  - `CSS 선택자 3가지`
    - 태그 선택자
    - 아이디 선택자
    - 클래스 선택자
  - `부트 스트랩`
    - JS + CSS(Framework)

### 2. Javascript

- `변수와 자료형`
  - `원시형`
    - 숫자형
    - 문자열형
    - 불리언형
    - Null형
    - Undefined형
  - `오브젝트형`
- `연산자`
  - == 와 === 차이
  - nullish ??
  - !연산자의 기본 원리
  - 형변환
- `조건문`
  - Node.js기반에서 사용자로부터 데이터를 입력받는 방법

```javascript
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});
rl.question('프로그래밍 언어 이름을 입력하시오 : ', function(data){
     // 입력값에 대한 처리
     console.log('가장 졸하아는 프로그래밍 언어는 ' + data + '입니다.');
     rl.close();
});
```
- `반복문`
- `함수`
- `이벤트와 이벤트 리스너`
  - `이벤트`
    - 마우스 이벤트
    - 키 이벤트
    - 기타 이벤트
  - `이벤트 리스너`
    - on + 이벤트
    - 처리방법
      - HTML 태그의 속성으로 이벤트 처리
      - 자바스크립트 영역에서 이벤트 처리
        - DOM요소.이벤트리스너 = 이벤트 핸들러
      - addEventListener로 이벤트 등록
        - DOM요소.addEventListener(이벤트 명, 실행할 함수명, 옵션)
        - removeEventListener로 이벤트 삭제
  - `이벤트 객체`
    - 객체형 이벤트 핸들러
    - 클래스형 이벤트 핸들러
  - `콜백함수`
    - 이벤트 리스너 == 콜백함수
    - DOM요소.addEventListener(이벤트명, 콜백 함수, 옵션)

```javascript
function order(callback) {
	callback(); // 함수 포인터
}
```

- `ES2015+ 문법`
  - `변수`
    - var : 기준범위 함수
    - let : 기준범위 {}, 변하는 값
    - const : 기준범위 함수, 고정 값
  - `템플릿 문자열`
    - ${}
  - `객체`
  - `화살표 함수`
  - `비구조화 활당`
  - `프로미스`
    - 프로미스 체이닝
    - 지금은 아니지만 나중에 처리
```javascript
// 예시
const pro11 = pid => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (pid == 'jamsuham') {
                    resolve('pro11 success');
               } else {
                    reject('pro11 err');
               }
          }, 4000);
     });
}
const pro12 = ppw => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (ppw == '1111') {
                    resolve('pro12 success');
               } else {
                    reject('pro12 err');
               }
          }, 4000);
     });
}
const id12 = 'jamsuham';
const pw12 = '1111';
pro11(id12).
then(result => {
     console.log('result11', result);
     return pro12(pw12);
}).then(result => {
     console.log('result12', result);
}).catch(err => {
     console.log('err', err);
     return Promise.reject(err);
})
```

---

### 3. Node.js

- `Node.js 시작`
  - `V8 엔진`
  - `Node.js 사용 이유`
    - 이벤트 기반
      - 콜백 함수
    - 비동기(논블로킹 I/O)
      - 블로킹
      - 논플로킹
    - http 모듈 기반
  - `express 기반 웹 서버`
    - http 모듈 기반에서 업그레이드
    - listen(포트번호, 실행할코드)
  - `기본적인 GET 요청`
    - get(웹서버에서 요청한 url, 콜백함수)
    - 콜백함수(req, res)
  - `서버에서 HTML 파일 전송`
    - send()
      - 문자열 응답
    - sendFile()
      - sendFile(보낼 파일 경로)
      - 파일 응답

```javascript
const express = require('express'); // express 라이브러리 사용해서 express 객체 생성
const app = express(); // express 사용해서 새로운 app 객체 생성, app : 서버 객체라고 생각

app.listen(8080, function(){ // listen : 서버 띄우고 client 객체의 요청 기다림, function() : 서버 구동시 콜백함수
     console.log("포트 8080으로 서버 대기중.......")
});

app.get('/book', function(req, res) {
     res.send('도서 목록 관련 페이지입니다. ');
});

app.get('/', function(req, res) {
     res.sendFile(__dirname + '/index.html'); //__dirname : 현재 디렉토리 
});
```

- `MySQL`
  - `데이터베이스`
    - DBMS 종류 
      - MySQL
      - Oracle
      - MongoDB : NoSQL 기반 DBMS
    - 데이터베이스 분류
      - RDB
        - Row, Column
        - SQL로 데이터베이스 접근
      - NoSQL
        - SQL만 사용 X
        - 확장 EZ, 다루기 쉬움, 스키마 정의 없이 사용 가능
        - 종류
          - Key-value 모델
          - Document 모델
          - Graph 모델
          - Column-family 모델
  - `스키마와 테이블 생성`
    - 테이블(표) * N -> 스키마
    - 스키마 * N -> 데이터베이스 서버
  - `SQL문과 CRUD`
    - 데이터 추가
    - 데이터 조회
    - 데이터 갱신
    - 데이터 삭제
  - `테이블 분리 및 조인`
    - RDB 필요의 이유 : 중복된 컬럼 분리
    - 테이블 분리
    - 테이블 조인
  - `MySQL 워크벤치`
  - `MySQL + NodeJS 연동`

```sql
show databases; // 데이터베이스 목록을 보여줌
use {schema 명}; // 데이터베이스 목록 중 1개를 사용
show tables; // 사용중인 DB의 테이블을 보여줌

// 스키마 생성
create database {schema 명} default character set utf8; // 스키마 생성
use {schema 명}; // 스키마 조작 전 사용 알림
show tables; // Empty 값

// 테이블 생성
create table {테이블 명} (
	-> id int(11) not null auto_increment,
    -> title varchr(100) not null,
    -> content text null
    -> created datetime not null,
    -> writer varchar(100) null,
    -> email varchar(100) null,
    -> primary key(id));
desc {테이블 명}; // 테이블 보기
```

```sql
// 데이터 추가
insert into 테이블명 (필드명...) values(입력할 값...); 
insert into post(title, content, created, writer, email) values('라면', '라면은 역시 밤에 먹는게 꿀맛', now(), 'song', 'song@naver.com');


// 데이터 조회
select 필드명... from 테이블; 
select * from post;
select id, title, content from post;

select 필드명... from 테이블 where 조건; 
select * from post where writer = 'song';

select 필드명... from 테이블 order by 필드명 (desc?); 
select * from post order by id desc;

select 필드명... from 테이블 limit 출력할 데이터 개수; 
select * from post limit 3;


// 데이터 수정
update 테이블명 set 수정할 필드 = '수정할 내용' where id = 수정할 데이터 id; 
update post set content = '성격파탄자' where id = 3;
update post set content = '성격파탄자', writer = '상남자' where id = 3;


// 데이터 삭제
delete from 테이블명 where id = 수정할 데이터 id; 
delete from post where id = 3;
```

```sql
rename table {기존 테이블명} to {바꾸고 싶은 테이블명}; 기존 테이블 명 바꾸기

// 새로운 테이블 post, profile 작성 -> 데이터 넣기
create table {테이블명} (
	-> id int(11) not null auto_increment,
    -> title varchr(30) not null,
    -> content text null
    -> created datetime not null,
	-> profile_id int(11) default null,
    -> primary key(id));
create table {테이블명} (
	-> id int(11) not null auto_increment,
    -> writer varchar(30) null,
    -> email varchar(100) null,
    -> primary key(id));
insert into ... 


// 테이블 조인
select 필드명 from 테이블1 left join 테이블2 on 테이블1.profile_id = 테이블2.id; // 형태
select * from post 
	left join profile 
    on post.profile_id = profile.id;
select * from post.id, title, content, created, writer, email 
	left join profile 
    on post.profile_id = profile.id;
```

- `MongoDB`
  - `몽고DB Atlas 사용`
  - `몽고DB 데이터베이스와 컬렉션`
    - 몽고DB : 도큐먼트 지향 데이터베이스
    - 도큐먼트 : XML, JSON 같은 형식의 데이터를 저장하는 것
    - RDBMS보다 유연 -> 데이터 구조 알 수 없거나, 변경 및 확장이 있는 경우 사용
    - JSON 형태의 동적 스키마형 도큐먼트 사용 (기본 데이터 : 도큐먼트)
    - 도큐먼트 * N -> 컬렉션 : RDB의 테이블과 비슷한 개념
  - `도큐먼트 사용`
  - `몽고DB + NodeJS 연동`
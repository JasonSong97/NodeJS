# Node.js

## 배운 내용

### HTML, CSS

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

### Javascript

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

### Node.js

const express = require('express'); // express 라이브러리 사용해서 express 객체 생성
const app = express(); // express 사용해서 새로운 app 객체 생성, app : 서버 객체라고 생각

app.listen(8080, function(){ // listen : 서버 띄우고 client 객체의 요청 기다림, function() : 서버 구동시 콜백함수
     console.log("포트 8080으로 서버 대기중.......")
});
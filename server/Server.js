// Node.js - MongoDB 연동코드
const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:1234@cluster0.s8uqhla.mongodb.net/';
mongoclient.connect(url).then(client => {
     console.log('몽고 DB 접속 성공');
});

// Node.js - MySQL 연동코드
// var mysql = require('mysql');
// var conn = mysql.createConnection({
//      host: 'localhost',
//      user: 'root',
//      password: 'abc0701!!',
//      database: 'myboard'
// });

// conn.connect();

//
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

app.get('/list', function(req, res) {
     conn.query("select * from post", function(err, rows, fields) {
          if (err) throw err;
          console.log(rows);
     });
});
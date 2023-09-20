const http = require('http'); // http 라이브러리 require()포함시시킨다는 것

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { // createServer() : http 모듈로 서버를 1개 생성하는 기능
     // 내부에 req, res 콜백 함수 존재
     res.statusCode = 200;
     res.setHeader('Content-type', 'text/plain');
     res.end('Hello js world');
});

server.listen(port, hostname, () => { // Client가 서버에 접속하기 전까지 대기(리스너)
     console.log(`Server running at http://${hostname}:${port}/`);
});
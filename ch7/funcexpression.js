// 함수 표현식
var nickName = function() {
     console.log('송재근');
};
nickName(); // 익명함수

// 함수 선언식
nickName = function() {
     console.log('명재우');
};
nickName();

// 함수 변수에 복사
var nickName = function() {
     console.log();
};

var userName = nickName;
userName();
nickName();
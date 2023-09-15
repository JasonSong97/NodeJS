// 3.1
var msg = 'Hello';

msg = 'World';
console.log(msg);

// 3.2
var msg = 'Hello';
var count = 100;
msg = count;
console.log(msg);

// 3.5
var msg = 'Hel lo'.length;
console.log(msg);

// 3.6
var love = null;
console.log(love);
console.log(Boolean(love));

var name;
console.log(name);

var nickname = 'lch';
console.log(nickname);
nickname = undefined;
console.log(nickname);

// 3.7
var msg = 100;

var msg = {haha : '불꽃 남자'};

var msg = {
     name : '불꽃 남자',
     comment : '포기를 모르는 남자',
     age : 16
};
var array = [];
array.push(msg);
console.log(array);

var msg = new Object();
msg = {
     name : '불꽃 남자',
     comment : '포기를 모르는 남자',
     age : 16
};
var array = new Array();
array.push(msg);
console.log(array);
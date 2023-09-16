// 비구조화 할당
const color = ['red', 'green', 'blue'];
let r = color[0];
let g = color[1];
let b = color[2];
console.log(r);
console.log(g);
console.log(b);
let user = {
     id: 'jamsuham',
     pw: '1234',
     nickname: '잠수함',
     age: 30,
};
let id = user.id;
let pw = user.pw;
let nickname = user.nickname;
let age = user.age;
console.log(id);
console.log(pw);
console.log(nickname);
console.log(age);

// 배열 구조 분해
const color2 = ['red', 'green', 'blue'];
let [r2, g2, b2] = color2;
console.log(r2);
console.log(g2);
console.log(b2);

// 배열의 변수 값 변경
const color3 = ['red', 'green', 'blue'];
let [r3, g3, b3] = color3;
[b3, g3, r3] = [r3, g3, b3];
console.log(r3);
console.log(g3);
console.log(b3);

[b4, g4, r4] = ['red', 'green', 'blue'];
console.log(r4);
console.log(g4);
console.log(b4);

// 배열의 기본값 설정
const [a5, b5, c5] = ['C#', 'Java'];
console.log(a5);
console.log(b5);
console.log(c5);

const [a6, b6, c6 = "C++"] = ['C#', 'Java'];
console.log(a6);
console.log(b6);
console.log(c6);

// 일부 요소값 무시
const [a7, , c7, d7] = ['C#', 'Java', 'Python', 'C++'];
console.log(a7);
console.log(c7);
console.log(d7);

// 배열의 나머지 요소 가져오기
const [a8, b8, ...rest] = ['C#', 'Java', 'Python', 'C++', 'react'];
console.log(a8);
console.log(b8);
console.log(rest.length);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);

// 배열끼리 결합
const arr1 = ['C#', 'js'];
const arr2 = ['python', 'react', 'C++'];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// 객체 구조 분해
let user2 = {
     id2: 'jamsuham',
     pw2: '1234',
     name2: '잠수함',
     age2: 30,
};
let {id2, pw2, name2, age2} = user2;
console.log(id2);
console.log(pw2);
console.log(name2);
console.log(age2);

let {id3, pw3, name3, age3} = {id3: 'jamsuham', pw3: '1234', name3: '잠수함', age3: 30,} 
console.log(id3);
console.log(pw3);
console.log(name3);
console.log(age3);

// 객체 기본값 설정
let user4 = {
     name4: '잠수함',
     age4: 30,
};
let {id4 = 'guest', pw4 = '1234', name4, age4} = user4;
console.log(id4);
console.log(pw4);
console.log(name4);
console.log(age4);

// 객체의 나머지 요소 가져오기
let user5 = {
     id5: 'jamsuham',
     pw5: '1234',
     name5: '잠수함',
     age5: 30,
};
let {id5, ...rest5} = user5;
console.log(id5);
console.log(rest5.pw5);
console.log(rest5.name5);
console.log(rest5.age5);
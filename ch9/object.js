let dic = new Object();

dic.boy = "소년";
dic.girl = "소녀";
dic.friend = "친구";

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

// 변경
let dic = {
     boy: "소년",
     girl: "소녀",
     friend: "친구"
};

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

// 추가
dic.apple = "사과";
dic.ten = 10;
console.log(dic.apple);
console.log(dic.ten);

// 삭제
let dic = {
     boy: "소년",
     girl: "소녀",
     friend: "친구"
};

delete dic.girl;
console.log(dic.boy);
console.log(dic.girl); // undefined
console.log(dic.friend);

// 수정
let dic = {
     present: "현재"
};
console.log(dic.present);
dic.present = "선물";
console.log(dic.present);

// let -> const
const dic = {
     present: "현재"
};
console.log(dic.present);
dic.present = "선물";
console.log(dic.present);

// const 에러 시키기
const dic = {
     present: "현재"
};
dic = {}; // 에러 발생
console.log(dic.present);
dic.present = "선물";
console.log(dic.present);

// 객체의 프로퍼티와 메소드
const unit = {
     attack: function(weapon) {
          return `${weapon}으로 공격한다.`;
     }
}

// attack (weapon) {
//      return `${weapon}으로 공격한다.`
// };

console.log(unit.attack('주먹'));
console.log(unit.attack('총'));

// 대괄호 접근
let dic = {
     boy: "소년",
     girl: "소녀",
     friend: "친구"
};
console.log(dic['boy']);
console.log(dic['girl']);
console.log(dic['friend']);

// 사용자 입력받기
const readline = require("readline");
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});
let dic = {
     boy: "소년",
     girl: "소녀",
     friend: "친구"
};
rl.question("찾을 단어를 입력하세요. ", function(key) {
     let word = key;
     console.log(word);
     rl.close();
});

// 계산된 프로퍼티
const readline = require("readline");
const rl1 = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});
rl1.question("다이쓰! 무조건 천원, 상품입력? ", function(obj) {
     let basket = {
          [obj]: "1000원",
     }
     console.log(basket[obj]);
     rl1.close();
});

// 단축 프로퍼티
let id = 'jamsu';
let pw = '1111';
let user = {
     id: id,
     pw: pw,
     // id,
     // pw,
}
console.log(user.id);
console.log(user.pw);

// for ~ in
let human = {
     id: 'jamsu',
     pw: '1111',
     name: 'lch',
     mobile: '010-1111-2222',
     county: 'korea'
}
for (let info in human) {
     console.log(`${info} : ${user[info]}`);
}
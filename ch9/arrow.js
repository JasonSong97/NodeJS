// 1
let plus = (a, b) => {
     return a + b;
}
let result = plus(10, 20);
console.log('두수의 합 : ' + result);

// 2
let plus2 = (a, b) => a + b;
let result2 = plus2(10, 20);
console.log('두수의 합 : ' + result2);

// 매개변수 1개
let plus3 = a => a + 2;
let result3 = plus3(10, 20);
console.log('값의 2증가 : ' + result3);

// 매개변수가 없는 경우
let plus4 = () => "플러스";
let result4 = plus4();
console.log('A ' + result4);
// 4.2
console.log(+'1024'+1);
console.log(+true);
console.log(+false);
console.log(+'tent');

console.log('10' + 2);
console.log('긴급출동' + 119);

console.log('10' - 2);
console.log('10' * 2);
console.log('10' / 2);
console.log('10' - '2');
console.log('10' * '2');
console.log('10' / '2');

// 4.5
var size1 = 1024;
var size2 = '1024';
console.log(size1 == size2);
console.log(size1 === size2);

console.log(null == undefined);
console.log(null === undefined);

console.log(null == 0);
console.log(0 == undefined);

var age = 30;
var result = age >= 19 ? '성인입니다.' : '애기';
console.log(result);

// 4.6
console.log(!'jason');
console.log(!null);
console.log(!0);

var id = 'jason';
var result = (id != null && id != undefined) ? '아이디가 입력되었습니다.' : '다시 입력해'; 
console.log(result);

var id = 'jason';
var result = (id ?? null)  ? '아이디가 입력되었습니다.' : '다시 입력해'; 
console.log(result);
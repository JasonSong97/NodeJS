var savedUser = '이은성';

function account() {
     console.log('반갑습니다.' + savedUser + '님');
     savedUser = '김사랑'; // 변경 해버리기
}
account();
console.log('또 오셨네요' + savedUser + '님');
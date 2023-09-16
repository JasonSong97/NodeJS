function account() {
     var savedUser = '송재근';

     console.log('반갑습니다.' + savedUser + '님');
}
account();
console.log('또 오셨네요' + savedUser + '님'); // savedUser 지역변수

function naver() {
     console.log('naver 함수 진입');
     var savedUser = '명재우';
     google();
     console.log('naver 함수 탈출');
}
function google() {
     console.log('google 함수 진입');
     var savedUser = '전승준';
     console.log('google 함수 탈출');
}
naver();
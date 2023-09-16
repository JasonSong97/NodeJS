var pro1 = new Promise(function(resolve, reject){
     resolve('success');
});
pro1.then(function(result){
     console.log('result', result);
});

// 프로미스에 많이 사용하는 setTimeout
var pro2 = new Promise(function(resolve, reject){
     setTimeout(function(){
          resolve('success');
     }, 2000);
});
pro2.then(function(result){
     console.log('result', result);
});

// 프로미스 생성코드 노출하지 않기
function pro3() {
     return new Promise(function(resolve, reject) {
          setTimeout(function(){
               resolve('success');
          }, 2000);
     });
}
pro3().then(function(result) {
     console.log('result', result);
})

// 비동기 작업 코드 추가
function pro4() {
     return new Promise(function(resolve, reject) {
          setTimeout(function() {
               resolve('pro4 success');
          }, 3000);
     });
}
function pro5() {
     return new Promise(function(resolve, reject) {
          setTimeout(function() {
               resolve('pro5 success');
          }, 3000);
     });
}
pro4().then(function(result) {
     console.log('result1', result);

     pro5().then(function(result) { // 콜백 함수 형태
          console.log('result2', result);
     });
});

// 프로미스 체이닝(콜백 함수 형태 보완)
function pro6() {
     return new Promise(function(resolve, reject) {
          setTimeout(function() {
               resolve('pro6 success');
          }, 3000);
     });
}
function pro7() {
     return new Promise(function(resolve, reject) {
          setTimeout(function() {
               resolve('pro7 success');
          }, 3000);
     });
}
pro6().then(function(result) {
     console.log('result1', result);
     return pro7();
}).then(function(result) {
     console.log('result2', result);
});

// 프로미스 작업 수행 실패 시 처리
// function pro8() {
//      return new Promise(function(resolve, reject) {
//           setTimeout(function() {
//                reject('pro8 fail');
//           }, 3000);
//      });
// }
// function pro9() {
//      return new Promise(function(resolve, reject) {
//           setTimeout(function() {
//                reject('pro9 fail');
//           }, 3000);
//      });
// }
// pro8().then(function(result) {
//      console.log('result1', result);
//      return pro9();
// }).catch(function(err) {
//      console.log('err', err);
//      return Promise.reject(err); // 뒤에 코드 안나오게 하는 것
// }).then(function(result) {
//      console.log('result2', result);
// });

// 프로미스 코드 개선 및 정리
const pro11 = pid => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (pid == 'jamsuham') {
                    resolve('pro11 success');
               } else {
                    reject('pro11 err');
               }
          }, 4000);
     });
}
const pro12 = ppw => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (ppw == '1111') {
                    resolve('pro12 success');
               } else {
                    reject('pro12 err');
               }
          }, 4000);
     });
}
const id12 = 'jamsuham';
const pw12 = '1111';
pro11(id12).
then(result => {
     console.log('result11', result);
     return pro12(pw12);
}).then(result => {
     console.log('result12', result);
}).catch(err => {
     console.log('err', err);
     return Promise.reject(err);
})
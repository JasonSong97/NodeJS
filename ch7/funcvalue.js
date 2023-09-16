var userName = '송재근';
var userPW = '1111';

function account(userId, userPw) {
     console.log(userId);
     console.log(userPw);
     var savedName = "송재근";
     var savedPw = '1111';

     userPw = userPw || '1111';

     if (userId == savedName) {
          if (userPw == savedPw) {
               console.log("반갑습니다. " + userId + '남');
          }
     }
}
account(userName); // userPw = '1111'
//account(userName, userPW); // account(userName);
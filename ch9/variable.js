function myTest() {
     if (true) {
          var x = 100; // let
     }
     console.log(x);
}
myTest();

function myTest2() {
     if (true) {
          const x = 100;
          x = 200;
     }
     console.log(x);
}
myTest2();
let today = "20251031";
const NUM = 5;
today = "금요일";
console.log( typeof today );
console.log( today );
/*
+,-,*,/,%
++,--
&&,||,!
*/
let a=20;
b = a++;
console.log( b ); //20
console.log( a ); //21

b = --a;
console.log( b ); //20
console.log( a ); //20

a=a++;
console.log( a );//20

let isLogin = true;
isLogin && console.log( "로그인을 했습니다." );

let isEmail = false;
isEmail || console.log("이메일 입력!");

let userName = "";
let displatyName = userName || "Guest";
console.log(displatyName);
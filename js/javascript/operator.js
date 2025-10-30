/*
연산자
산술:+,-,*,/,%(나머지),**(제곱)
*/
let a = 8;
let b = 5;
console.log( 'a+b=',a+b ); //13
console.log( 'a-b=', a-b);
console.log( 'a*b=', a*b);
console.log( 'a/b=', a/b);
console.log( 'a%b=', a%b);
//even,odd, 4의 배수 : 범위의 수를 구할 때 
console.log( 'a**b=',a**b ); //8*8*8*8*8

//대입연산자
//=,+=,-=,*=
let c = 5;
c +=2; // c = c+2; 7
c -=1; // c = c-1; 6
c *=3; // c = c*3; 18
c %=4; // c = %4; 1
console.log('c=',c);

//비교연산자
// >, <, >=,<=, 같다(==, ===),같지 않다(!=,!==)
let d = 10;
let e = 5;
console.log( d>e ); //true
console.log( d<e ); //false
console.log( d =='10'); //true 값만 비교
console.log( d==='10'); //false : 값과 타입 비교 
console.log( d !='10'); //false 
console.log( d !=='10'); //true 

//논리연산자
let f =10;
let g =0;
console.log( Boolean(f) ); //true
console.log( Boolean(g) ); //false
//and (둘 다 true 여야 true):&&
//or(둘 중 하나만  true면 true):||
//not(반대):!
let h = false;
console.log( f>8 && g); // false
console.log( f>8 || h); // true
console.log(!h); //true
let userName ='';
let nick = userName || 'guest';
console.log(nick); //true(guest가 찍힘)

let isCheck = true;
isCheck && console.log( "체크상태입니다." );
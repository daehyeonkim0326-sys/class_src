/*
증감연산자(단항연산자) : ++,--
변수++, ++변수,변수--,--변수
1씩 증가하거나 1씩 감소를 할 때 사용
 */
// let a=5;
// let b=a++;
// console.log( 'a=',a);
// console.log( 'b=',b);

// b=a--;
// console.log( 'b=',b );

// //a=5, b=6
// a=++b;
// console.log('a=',a,'b=',b); //a=7, b=7
// b=a--;
// console.log('a=',a,'b=',b);

let c=8;
let d=2;
c++;
console.log('c=',c); //c=9
--c;
console.log( 'c=',c); //c=8
console.log( c++ ); //8
console.log( c ); //9
c++;
c++;
d=c;
console.log( 'd=',d); //d=11
console.log( --d); //d=10

let i=5;
console.log( i++ + ++i); //12
console.log( i ); //7

let score = 0;
score++;
score++;
score += 5;
console.log( 'score=',score ); //

let time = 10; //10
time--;//9
time--;//8
time-=3;//time=8-3
console.log( 'time=',time );//5 
let exp = 0;
exp += 10;
exp ++;
exp +=20;
console.log( 'exp=',exp); //31 
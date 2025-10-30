/*
삼항(조건)연산자
항? 항1 : 항2
(조건식) ? true : false;
*/
let age = 25;
let result = (age>19) ? "성인입니다.":"미성년자입니다.";
console.log( result );

/**
짝수와 홀수를 판별해서 2,3
숫자 % 2 === 0 : 짝수, 홀수 
->짝수는 "짝수"출력,
->홀수는 "홀수"출력
삼항 연산자 : true/false 
1. 변수를 선언하고 임의 수를 저장
2.짝수와 홀수를 판별(삼항연산자로)
3.참일 경우 "짝수"출력 변수에 저장
4.거짓일 경우에는 "홀수"출력 변수에 저장
5.변수를 출력( console.log )
*/
let num = 4;
let msg = (num%2===0) ? "짝수" : "홀수";
console.log(msg);

/**
점수가 60점 이상이면 합격을 출력,60점 미만이면 불합격 출력
조건:참/거짓
순서
*/
let score= 70;
let print = (score>=60) ? "합격":"불합격";
console.log(print);

/*
숫자를 저장 후 저장된 숫자가
-> 0보다 크면 "양수"
-> 아니면 "0 또는 음수"를 출력
출력은 변수에 저장하여 출력합니다. 
*/
/*
(숫자>0) ? "양수" : "0또는 음수"
1.숫자 변수를 선언 후 숫자를 저장
1-1.결과를 저장할 변수를 선언
2.조선을 이용해서 결과를 결과저장변수에 저장
3.결과저장변수를 출력
*/
let data = 9;
let result_data =(data>0) ? "양수" : "0또는 음수";
console.log( result_data );
/*
이름이라는 변수에 저장된 값이 빈 문자열이면 "이름없음",
값이 있으면 "이름 있음"을 출력
"",''
*/
let user_name ='';
let result_name = (user_name)?"이름 있음" : "이름 없음";
// let result_name = (Boolean(user_name))?"이름 있음" : "이름 없음";
console.log( result_name );
//nullish 연산자 ??
//값이 null이거나 undefined일 때 기본값을 설정
let data1 = null;
let result_data1 = data1 ?? "guest";
console.log( result_data1 );
//옵셔널 체이닝 연산자 ?.
//존재하지 않는 데이터가 있을 경우 오류없이 처리
let data2 = null;
// console.log( data2.data );
console.log( data2?.data );    

var price1 = 3000;
var price2 = 6000;
var price3 = 3000;
var price = ( price1+price2+price3>10000 ) ? "10,000원 초과" : "돈 관리 참 잘했어요~";
console.log(price);

let sell1 = 1200;
let sell2 = 1300;
let sell3 = 1000;
let sell4 = 1500 ;
let sell = ( (sell1+sell2+sell3)/3 <= sell4 ) ? "판매량이 평균 이상입니다" : "시말서 써와";
console.log(sell);

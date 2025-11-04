/*
조건문,선택문
조건의 결과가 true 일경우만 ,코드 실행
조건연산자:(조건식) ? true:false;
if(조건식){
조건이 참일경우;}
*/
//나이가 19세 이상? age>19
// 참--> "성인"출력
// 거짓--> "미성년자"출력
let age = 20;
let result = '';
// result = (age>19) ? "성인":"미성년자";
// console.log( result );

if(age>19){
    //참일경우
    result = "성인";
} else{
    result = "미성년자"
}
console.log("결과는",result);

result = Boolean(10>5);
// result = Boolean( 3 = '3');
result = Boolean( 3 === '3');
result = Boolean('hello');
result = Boolean('');
console.log( "결과는",result );
//변수에 숫자를 저장 후 양수인지, 음수인지, 0인지 구분
//조건이 숫자>0
//참 -->양수 출력
//거짓 --> 음수,0 조건 : 숫자<0
//--->참:음수
//--->거짓:0
let num = 10;
if( num>0 ){
    console.log( "양수입니다" );
} else if( num<0 ){
    console.log("음수입니다");
} else {
    console.log("0입니다.")
}
/*
5의 배수의 수는  "5의 배수입니다"출력,아니면"아닙니다"출력
*/
num = 40;
// if( num%5 === 0 ){
//     console.log( "5의 배수입니다" );
// }else {
//     console.log( "아닙니다" );
// }
if(num%5){
    console.log("아닙니다");
}else{
    console.log("5의배수입니다");
}

/*
사용자가 로그인을 했을 때
참==>"환영합니다"
거짓==>"로그인을 하세요"
*/
let login= false;
if( login ){
    console.log( "환영합니다" );
}else{
    console.log( "로그인을 하세요" );
}
/*
현재 시간에 따라
0~12시 사이는 : 좋은 아침입니다 출력
13~18시 : 좋은 오후입니다 출력
18~23시: 이이요루다나~
*/
let hour=20;
if( hour<12 ){
    console.log("좋은 아침입니다");
}else if( hour < 18 ){
    console.log("좋은 오후입니다");ㅍ
}else{
    console.log("이이요루다나~");
}
/*
직접참조형 : 값 자체가 메모리에 저장되는 자료형태
자료형 : 변수에 저장되는 자료의 형태
숫자형(number ) : 0~,-1아래 
문자열 (string) : 문자와 문자의 연결
불린형 (boolean) : true/false , 참/거짓
undifined : 변수를 선언하고 값을 지정하지 않았을 때
null : 의도적으로 값이 없음 설정
*/
let text = '안녕하세요'; //문자열
let txtCopy = text;  //안녕하세요
// txtCopy = text;
text = '반갑습니다';
console.log(txtCopy);

let check = 100>30;
console.log(check);

let data1 = Number("500");
console.log(data1);
console.log( typeof data1);

//boolean형태 확인
let data2 = boolean(1); //true
data2 = boolean(0); //false            숫자 0은 다 false
data2 = boolean(-1); //true
data2 = boolean('0'); //true           문자열 다 true
data2 = boolean(' '); //true           공백이 있으면 true
data2 = boolean(''); //false           없으면 false
data2 = boolean(null); //false 
data2 = boolean(undefined); //false    값이 없는 상태는 다 false
console.log(data2);
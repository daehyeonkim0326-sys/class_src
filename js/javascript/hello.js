/*
변수:변하는 데이터를 저장할 수 있는 공간
변수 선언시 사용하는 키워드
var:예전문법(사용 지양)
let:변수를 선언하는 키워드-------------
                                        둘 다 기본적으로 사용
const:상수(변하지 않는 수:고정된 수)----
let 변수명;

변수명을 만드는 규칙
1.숫자로는 시작하지 못함
2.대소문자 문자를 구분함 A와 a는 다르다
3.의미있는 이름 사용금지 ex: class, id, name
4.변수를 사용할 때는 무엇을 담는지 명확히 기재
5.예약어 사용금지, let,var
6.한글은 사용가능하나 깨지기 때문에 추천하지 않는다
7.특수문자 제한적 .,%@n#*사용 불가능 $_사용가능
8.상수는 일반적으로 대문자로만 구성하는게 관례
*/
let userName; //변수선언
console.log(userName); //undefined
userName = '홍길동'; //대입연산자
console.log( userName ); 

let age = 5;
console.log(age);
age = '춘향이';
console.log(age);

const site = 'mbc';
console.log(site);
site = 5;
console.log(site);
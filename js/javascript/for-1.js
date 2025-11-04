/*
반복문:코드를 원하는 횟수만큼 반복
for, for-in,for-of
array 객체-map, foreach, fillter....
while,do-while
*/
//배열,객체,함수--->objeat(간접참조)
//배열: 변수명 = [값1,값2,값3,값4...값n]
//   변수명[0], 변수명[2].....변수명.length-1
// let a = ["사과","바나나","샤인머스켓","포도","배","코코넛"];
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log( a[ n ] );
// console.log("a의 데이터 갯수",a.length);

/*
for(초기값;조건식;증감식){
반복되는 문장}
*/
// let i=0;
// for( let i=0; i<6; i++){
//     console.log( `a[${i}]=${a[i]}` );
// }
// console.log(i);

// for( let i=1; i<=5; i++){
//     console.log(`반복문-$(i)번째`);
// }

// for (let i=1; i<11; i++){
//     console.log(i);
// }
// for (let i=0; i<5; i++){
//     console.log("hello js");
// }

// for (let i=2; i<11; i+=2){
//     console.log(i);
// }
// for (let i=5; i>=1; i--){
    // console.log(`카운트 : ${i}`);
// }
// let sun = 0;
// for (let i=1; i<11; i++){
//     sun += i;
// }
// console.log("1부터 10까지의 합 : ",sun);
// for (let i=1; i<10; i++){
//     console.log(`3*${i}=${3*i}`);
// }
for(let i=2; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(`${i}*${j}=${i*j}`);
    }
}


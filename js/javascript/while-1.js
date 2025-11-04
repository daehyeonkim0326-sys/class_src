/*
배열에서 원하는 값의 index번호 알아오기
*/
let list = ['사과','포도','바나나','딸기','수박'];
let target = '바나나';

let index = 0;
while(index < list.length){
    if( list[index] === target ){
        console.log(`index는 ${index}입니다`);
        break;
    }
    index++;
}
/*
숫자 배열 : [5,8,2,10,3,7]
배열에 있는 숫자들의 합이 20이 넘으면 종료하세요
*/
// let numbers = [5,8,2,10,3,7];

// let i = 0, sum = 0;
// while( i<numbers.length){
//     sum += numbers[i];
//     if(sum>=20){
//         console.log(`sum=${sum}`);
//         break;
//     }
//     i++;
// } 

// let data = [5,-1,8,-1,2,-1,9];
// let n = 0;
// let total = 0;
// while( n<data.length){
//     if(data[n] < 0){
//         n++;
//         continue;
//     }
//     total += data[n];
//     n++;
// } 
// console.log(`total = ${total}`);
let data = [5,-1,8,-1,2,-1,9];
let total = 0;
for(let n of data){
    if( n<0 ){
        continue;
    }
    total += n;
}
console.log(`tatal = ${total}`);

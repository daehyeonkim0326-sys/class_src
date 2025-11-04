/*
배열과 같이 사용이 되는 for
for-of문
*/
// let colors = ['red','green','blue'];
// for( let i=0; i<3; i++){
//     console.log(`color-${i+1}:${colors[i]}`);
// }

// for( let color of colors ){
//     console.log(`색상 : ${color}`);
// }
/*
객체 : 모든 사물
            키:값,(프로퍼티)
*/
let user ={
    user_name:'홍길동',
    age:30,
    job:'의적'
}
// console.log( user.job );
/*
for-in
*/
// for( let key in user ){
    // console.log( user[key] );
// }
let txt = 'hello';
console.log( txt[1] );
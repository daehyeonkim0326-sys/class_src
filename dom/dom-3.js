/*
다음버튼을 누르면 1,2,3,4,5
5번에서 멈추도록
*/
//전역변수 선언
let count = 1;
const $nextBtn = document.querySelector('.next');
const $prevBtn = document.querySelector('.prev');
$prevBtn.disable=true;
//이미지 요소를 선택
const $img =document.querySelector("img");
$nextBtn.onclick = () =>{
    $prevBtn.disable=false;
    //count값이 1씩 증가
    count++;
    //count 값이 5보다 커지면 count 값이 5가 되어야 함.
    if( count > 5 ){
        count = 5;
        //더 이상 다음버튼이 눌리지 않게 disabled처리
        $nextBtn.disabled = true;

    }
    //이미지의 src속성을 변경
    $img.src =`./image/img-0${count}.png`;
}
//2.이전 버튼을 클릭 했을때
$prevBtn.onclick =()=>{
    //다음 버튼 활성화
    $nextBtn.disable=false;
    count--;
    if(count <= 1){
        count=1;
        $prevBtn.disabled = true;
    }
    $img.src =`./image/img-0${count}.png`;
}

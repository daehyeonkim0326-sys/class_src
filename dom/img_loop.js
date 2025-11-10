//요소선언
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderElem = document.querySelector('.slider');
const stop =document.querySelector('.stop');
const play =document.querySelector('.play');
//변수 선언
let count = 1;
const MAX_SIZE = sliderElem.children.length + 2;
const MAX_WIDTH = MAX_SIZE*300;
let timer = null;
//버튼 비활성화 함수
const disablebuttons =()=>{
    prev.style.poonterEvents='none';
    next.style.poonterEvents='none';

}
const enableButtons =()=>{
    prev.style.poonterEvents = 'auto';
    next.style.poonterEvents = 'auto';
}
const handleprevClick =()=>{
    if( count <= 0){
        return;
    }
    disablebuttons();
        count--;
        sliderElem.style.transition = '0.5s';
        sliderElem.style.left = `-${count*100}%`;
        //트랜지션 처리가 완료되면 버튼 다시 활성화
    }
    //멈춤버튼을 누르면 자동 실행이 멈추고
    stop.addEventListener('click',()=>{
        clearInterval(timer);
    });
    //플레이버튼을 누르면 자동 실행
    play.addEventListener('click',()=>{
        timer = setInterval(handleNextClick,3000);
    });
    //next버튼 처리될 때 실행되는 함수
    const handleNextClick = () =>{
        
        if(count>=MAX_SIZE){
            return;
        }
        count++;
        sliderElem.style.transition = '0.5';
        sliderElem.style.left = `-${count*100}%`;
        
    }
    next.addEventListener('click',handleNextClick);
prev.addEventListener('click',handleprevClick);
sliderElem.addEventListener('transitionend',()=>{
    if(count === MAX_SIZE-1){
        sliderElem.style.transition = 'none';
        count = 1;
        sliderElem.style.left = `-${count*100}%`;
    }
    //순간이동처리 맨 앞이 0번이 보여지면 이동
    if(count === 0){
        sliderElem.style.transition = 'none';
        count = MAX_SIZE-2;
        sliderElem.style.left = `-${count*100}%`;
    }
    enableButtons();
});
//prev 버튼을 클릭했을때 
const init =()=>{
    sliderElem.style.width = `${MAX_WIDTH}px`;
    //맨 뒤에 1번을 복제해서 추가
    const firstClone = sliderElem.children[0].cloneNode(true);
    sliderElem.append(firstClone);
    // setInterval(handleNextClick,1000);
    //맨 앞에 5번을 복제해서 추가
    const lastClone = sliderElem.children[4].cloneNode(true);
    sliderElem.prepend(lastClone);
    sliderElem.style.left = `-${count*100}%`;

}
init(); //시작되면 바로 함수 호출
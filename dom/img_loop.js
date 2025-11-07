const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderElem = document.querySelector('.slider');
let count = 0;
const handleNextClick = () =>{
    
        if(count>=5){
            return;
        }
        count++;
        sliderElem.style.transition = '0.5s';
        sliderElem.style.left = `-${count*100}%`;
        
}
next.addEventListener('click',handleNextClick);
sliderElem.addEventListener('transitionend',()=>{
    if(count === 5){
                sliderElem.style.transition = 'none';

        count = 0;
        sliderElem.style.left = `-${count*100}%`;
    }
});
prev.addEventListener('click',()=>{
    if(count<=0){return}
    count--;
    
        sliderElem.style.left = `-${count*100}%`;
});
const init =()=>{
    sliderElem.style.width = '1800px';
    //맨 뒤에 1번을 복제해서 추가
    const firstClone = sliderElem.children[0].cloneNode(true);
    sliderElem.append(firstClone);
    setInterval(handleNextClick,1000);
}
init(); //시작되면 바로 함수 호출
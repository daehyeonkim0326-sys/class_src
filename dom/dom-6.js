//상품수량은 1~10까지의 수만 처리가 됩니다.
//1이 되면 - 버튼은 비활성화 처리
//10이 되면 +버튼은 비활성화 처리
//- 누르면 수량이 1씩 감소, + 누르면 수량이 1씩 증가
//상품 갯수가 최대 10개까지만 구매가 가능합니다.
const MAX_LEN = 10;
const pElem = document.querySelector('.product>p');

const minusElem = document.querySelector('.product>button:nth-child(1)');
minusElem.disabled = true;
const plusElem = document.querySelector('.product>button:nth-child(3)');

let count = 1;
plusElem.onclick = () =>{
        minusElem.disabled = false;
        count++;
        pElem.textContent = `${count}`;
        if (count === MAX_LEN){
            plusElem.disabled = true;
        }
}
minusElem.onclick = () =>{
    plusElem.disabled = false;
    count--;
    pElem.textContent = `${count}`;
    if(count === 1){
        minusElem.disabled = true;
    }
}
const imgElem = document.querySelectorAll('aside>img');

for(let i=0 ; i<imgElem.length ; i++){
    imgElem[i].onclick = ()=>{
        const elem = document.querySelector('main>img');
        // elem.src = `./image/img-0${i+2}.png`;
        elem.setAttribute('src',`./image/img-0${i+2}.png`);
    }
}
const detailBtn = document.querySelector('#detail>button');
const dtailtxt = document.querySelector('#detail>.txt');
detailBtn.onclick = () =>{
    // detailtxt.style.display='block';
    dtailtxt.classList.toggle('hide');
    const btntxt = detailBtn.textContent;
    if(btntxt === '상세설명보기'){
        detailBtn.textContent='상세설명보기';
    }else{
        detailBtn.textContent ='상세설명보기';
    }
}
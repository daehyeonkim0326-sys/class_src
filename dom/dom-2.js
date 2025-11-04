//1.버튼이 클릭했을 때
        //2.이미지 속성을 변경:src
        const btnElem = document.querySelector('button');
        // console.log( btnElen );
        let count = 1;
        // btnElen.onclick = ()=>{
        
        // }
        const handleClick =()=>{
            const imgElem = document.querySelector('img');
            imgElem.src = './image/img-02.png';
        };
        btnElem.onclick = handleClick;
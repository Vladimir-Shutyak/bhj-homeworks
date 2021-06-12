let sliderArray = document.getElementsByClassName('slider__item');
let j = 0;

for (let i = 0; i < sliderArray.length - 1; i++){
    if (sliderArray[i].className === 'slider__item slider__item_active'){
         j = i;
    }   
}

function NextSlide(){
    sliderArray[j].className = 'slider__item';
    j = j + 1;
    
    if (j > sliderArray.length - 1) {
        j = 0;
    }
    
    sliderArray[j].className = 'slider__item slider__item_active';
}

function PrevSlide(){
    sliderArray[j].className = 'slider__item';
    j = j - 1;
    
    if (j < 0) {
        j = sliderArray.length - 1;
    }

    sliderArray[j].className = 'slider__item slider__item_active';
}

 let nextButton = document.getElementsByClassName('slider__arrow_next');
 nextButton[0].onclick = NextSlide;

 let backButton = document.getElementsByClassName('slider__arrow_prev');
 backButton[0].onclick = PrevSlide;

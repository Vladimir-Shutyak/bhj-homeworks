let activeScreen = document.getElementById('modal_main');

activeScreen.className += ' modal_active';

const buttonClose = document.getElementsByClassName('modal__close');
const buttonBtn = document.getElementsByClassName('show-success');

function funcClose(){ 
    activeScreen = this.parentElement.parentElement;
    activeScreen.className =  'modal'; 
}

function funcBtn(){
    activeScreen.className =  'modal'; 
    activeScreen = document.getElementById('modal_success');
    activeScreen.className += ' modal_active';
}

for (let i = 0; i <= buttonClose.length-1; i++){
    buttonClose[i].onclick = funcClose;
}

for (let j = 0; j <= buttonBtn.length-1; j++){
    buttonBtn[j].onclick = funcBtn;
}
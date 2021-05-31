
const clickCount = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let click;
click = 0;

function changeSizes(){
    click += 1;
    clickCount.textContent = click;
   
    if (click % 2) {
        cookie.width= 180;
    }
    else {
        cookie.width= 200;
    }
}

cookie.onclick = changeSizes;


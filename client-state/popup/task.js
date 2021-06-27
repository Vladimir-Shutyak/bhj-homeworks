let activeScreen = document.getElementById('subscribe-modal');
const buttonClose = document.querySelector('div.modal__close');

function getCookie(coockieName){
    const value = "; " + document.cookie;
    let parts=value.split("; "+coockieName+"=");
    
    if(parts.length === 2){
        return parts
        .pop()
        .split(";")
        .shift();
    }

}

 if (getCookie('ShowModal') !== 'false'){
    activeScreen.classList.add('modal_active');
 }

buttonClose.onclick = closeModal;

function closeModal(){ 
    activeScreen = this.parentElement.parentElement;
    activeScreen.classList.remove('modal_active'); 
    document.cookie = 'ShowModal=false';
}



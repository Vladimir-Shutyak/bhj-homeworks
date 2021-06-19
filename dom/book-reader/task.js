let fnt = document.getElementsByClassName('font-size');
 
function clickButton(){

    document.getElementById('book').className='book';

    if ( (this.getAttribute('data-size'))   ) {
        document.getElementById('book').classList.add(`book_fs-${this.getAttribute('data-size')}`);          
    }

    return (false);
}


for (let i = 0; i < fnt.length; i++){
      fnt[i].onclick = clickButton;
    }
    




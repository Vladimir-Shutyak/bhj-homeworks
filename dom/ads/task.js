let k=0;

function timer(){
    const adm = document.querySelector('span');

    if ( (k < adm.children.length) && (adm.children[k].nextElementSibling) ) {
        adm.children[k].classList.remove('rotator__case_active');
        adm.children[k].nextElementSibling.classList.add('rotator__case_active');
        k+=1;
    }

    else {
        adm.children[k].classList.remove('rotator__case_active');
        k=0;
        adm.children[k].classList.add('rotator__case_active');
    }

}

const time =  setInterval(timer,1000);
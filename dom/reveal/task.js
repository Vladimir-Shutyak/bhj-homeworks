const scrol = document.addEventListener('scroll',()=>{
    const banner = document.getElementsByClassName('reveal');

    for (let i = 0; i < banner.length; i++){
        
        if ( (banner[i].getBoundingClientRect().top < window.innerHeight) && (banner[i].getBoundingClientRect().bottom >= 0) ) {
            banner[i].classList.add('reveal_active');
        }
        
        else {
            banner[i].classList.remove('reveal_active');
        }
    }
}

)
let  frm = document.getElementById('signin__form');


function authGood(userID){
    document.getElementById('welcome').classList.add('welcome_active');
    frm.parentElement.classList.remove('signin_active');
    document.getElementById('user_id').textContent = userID;
}

if (localStorage.getItem('userId')){
    authGood(localStorage.getItem('userId'));
    }

else {
    frm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        let formData = new FormData(frm);
        xhr = new XMLHttpRequest(frm);
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    
        xhr.addEventListener('readystatechange', function(){

            if ( (this.readyState === this.DONE) && (this.status===200) ){
            
                if (JSON.parse(this.responseText)['success'] === true){
                    localStorage.setItem('userId',JSON.parse(this.responseText)['user_id']);
                    authGood(JSON.parse(this.responseText)['user_id']);
                }
                else {
                    alert('Неверный логин/пароль');
                }

            }
        })

        xhr.send(formData);    
    }
    )

    frm.parentElement.classList.add('signin_active');
}
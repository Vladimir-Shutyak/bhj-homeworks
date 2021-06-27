let frm = document.getElementById('form');
let progressBar = document.getElementById('progress');;


frm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let formData = new FormData(frm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');
    
    xhr.upload.onprogress = function(event){
        progressBar.value =  event.loaded / event.total;
    }
    
    xhr.send(formData);
    
})
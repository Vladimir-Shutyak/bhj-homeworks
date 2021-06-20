const chBox = document.getElementsByClassName('interest__check');

function chBoxClick(){

    let childInterest = (this.closest('li').getElementsByClassName('interest__check'));
    
    for (let i = 0; i < childInterest.length; i++){
       
        if (this.checked){
            childInterest[i].checked = true;
        }
        else {
            childInterest[i].checked = false;  
        }
        
    }

}

for (let i = 0; i < chBox.length; i++){
    chBox[i].addEventListener('change', chBoxClick);
}

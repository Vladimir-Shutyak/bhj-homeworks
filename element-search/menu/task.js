let element = document.querySelectorAll('a.menu__link');

function clickEvent(){

   if (this.nextElementSibling.className =='menu menu_sub'){
       this.nextElementSibling.className += ' menu_active' ;
   } 

   else if (this.nextElementSibling.className =='menu menu_sub menu_active'){
       this.nextElementSibling.className = 'menu menu_sub' ;
    } 
    
   return (false);
}

for (let i = 0; i < element.length; i++) {
    element[i].onclick = clickEvent;
}


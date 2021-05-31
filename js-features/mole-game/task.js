const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');

const clicking = function(){
    
    let dead = parseInt(deadMole.textContent);
    let lost = parseInt(lostMole.textContent);

    if (this.classList.contains( 'hole_has-mole' ))  {
        dead += 1;
        
        if (dead > 9) {
            alert('Победа!!!');
            dead = 0;
            lost = 0;
            lostMole.textContent = lost;
        } 
        
        deadMole.textContent = dead;

    }
    
    else {
        lost += 1;  
        
        if (lost > 5) {
            alert('Проиграл :-(');
            dead = 0;
            lost = 0;
            deadMole.textContent = dead;
        } 
        
        lostMole.textContent = lost; 
    }
}


let holeArray = [];

for (let i = 1; i<9; i++) {
    console.log(i);
    holeArray[i] = document.getElementById(`hole${i}`);
    holeArray[i].onclick = clicking;

}
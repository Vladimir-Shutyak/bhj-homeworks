let intervalId;

const countdown = function(){
    const sp = document.getElementById("timer");
    sp.textContent -= 1;
        if ( parseInt(sp.textContent) === 0) {
            alert('Вы победили в конкурсе!');
            clearInterval(intervalId);
        }
    }
intervalId = setInterval(countdown, 1000);

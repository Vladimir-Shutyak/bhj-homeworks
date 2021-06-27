let xhr = new XMLHttpRequest();
xhr.open('Get','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

function addQuestion(question){
    document.getElementById('poll__title').textContent = question;
}

function addAnswers(answer){
    let answList = document.getElementById('poll__answers');
    let answButton = document.createElement('button');
   
    answButton.setAttribute('class', 'poll__answer');
    answButton.textContent = answer;
    
    answList.appendChild(answButton);

    answButton.addEventListener('click', () =>{
        alert('Спасибо, ваш голос засчитан!');    
    })
}

xhr.addEventListener('readystatechange',() =>{

    if ( (xhr.status === 200) && (xhr.readyState === xhr.DONE) ){
      
        let answ = JSON.parse(xhr.responseText)['data'];
        addQuestion(decodeURI( encodeURI(answ['title'])));
        
        for (let i in answ['answers']){
            addAnswers(decodeURI( encodeURI(answ['answers'][i])));
        }    
    
    }
})


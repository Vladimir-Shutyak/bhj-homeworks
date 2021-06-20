const chatShow = document.querySelector('div');
let chatMessages = document.getElementById('chat-widget__messages');

function chatBotAnswer() {
    const words = [
        'Нетология!!!!',
        'Спасибо вам за такой классный курс!',
        'Раскатаем Яндекс.Практикум',
        'Уделаем GeekBrains',
        ':-)',
        'javascript - форева!'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

chatShow.onclick = () => {
    chatShow.classList.add('chat-widget_active');
}

const chatMyMess = document.getElementById('chat-widget__input');

function messageGenerate(mesType, mesText) {
    let date = new Date();
    let str=`<div class="message ${mesType}">
                <div class="message__time">${date.getHours() + ':' + date.getMinutes()}</div>
                <div class="message__text">
                    ${mesText}
                </div>
            </div>`;
    return (str);
}

chatMyMess.onchange = () => {
    chatMyMess.addEventListener('keyup', (e) => {
        
        if( (e.key === 'Enter') && (chatMyMess.value !='') ){
            chatMessages.innerHTML += messageGenerate('message_client',chatMyMess.value);
            chatMyMess.value=''; 
            chatMessages.innerHTML += messageGenerate('',chatBotAnswer());
            
        }

    })
}

chatMyMess.onblur = () => {
    chatShow.classList.remove('chat-widget_active');
}

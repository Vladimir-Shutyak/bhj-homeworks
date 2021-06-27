let xhr = new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com');
xhr.send();

function additem (code, value){

    let newItem = document.createElement('d');
    newItem.setAttribute('class', 'item');

    let newItemСode = document.createElement('div');
    newItemСode.setAttribute('class','item__code');
    newItemСode.textContent = code;

    let newItemValue = document.createElement('div');
    newItemValue.setAttribute('class','item__value');
    newItemValue.textContent = value;

    let newItemCurrency = document.createElement('div');
    newItemCurrency.setAttribute('class','item__currency');
    newItemCurrency.textContent = 'руб.';

    newItem.appendChild(newItemСode);
    newItem.appendChild(newItemValue);
    newItem.appendChild(newItemCurrency);

    document.getElementById('items').appendChild(newItem);

}


xhr.onreadystatechange = function(){
    
    if (xhr.readyState === 4){
        document.getElementById('items').removeChild;
        let answer = JSON.parse(xhr.responseText)['response']['Valute'];
       
        for (let prop in answer){
            additem(answer[prop]['CharCode'], answer[prop]['Value']);
        }

       document.getElementById('loader').classList.remove('loader_active');
    };
};
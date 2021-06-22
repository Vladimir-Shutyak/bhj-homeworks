let productDec = document.getElementsByClassName('product__quantity-control_dec');
let productInc = document.getElementsByClassName('product__quantity-control_inc');
let productAdd = document.getElementsByClassName('product__add');

function prodDec(){

    if ( Number(this.nextElementSibling.textContent) > 1) {
        this.nextElementSibling.textContent = Number(this.nextElementSibling.textContent) - 1;
    }

}

function prodInc(){
   this.previousElementSibling.textContent = Number(this.previousElementSibling.textContent) + 1;
}

function createElement(prodId, prodImg, prodCount){
    
    let newProdDiv = document.createElement('div');
    newProdDiv.setAttribute('class', 'cart__product');
    newProdDiv.dataset['id'] = prodId;

    let newProdImg = document.createElement('img');
    newProdImg.setAttribute('class','cart__product-image');
    newProdImg.setAttribute('src',prodImg);

    let newProdCount = document.createElement('div');
    newProdCount.setAttribute('class','cart__product-count');
    newProdCount.textContent = prodCount;

    newProdDiv.appendChild(newProdImg);
    newProdDiv.appendChild(newProdCount);

return (newProdDiv);

}


function prodAdd(){
    let prodCart = document.querySelector('div.cart__products');
    let prodCartExist = document.getElementsByClassName('cart__product');
    let m = false;
    
    if ( prodCart.childElementCount > 0 ) {
        
        for (let l = 0; l < prodCartExist.length; l++){
            console.log('-'+prodCartExist[l].getAttribute('data-id')+'-');
            if ( prodCartExist[l].getAttribute('data-id') === this.parentElement.parentElement.parentElement.getAttribute('data-id') ){
                prodCartExist[l].querySelector('div.cart__product-count').textContent = Number (this.parentElement.parentElement.parentElement.querySelector('div.product__quantity-value').textContent);
                m = true;
            }
        
        }

        if (m == false){
            prodCart.appendChild(createElement(
                this.parentElement.parentElement.parentElement.getAttribute('data-id'), 
                this.parentElement.parentElement.parentElement.querySelector('img').getAttribute('src'),
                Number (this.parentElement.parentElement.parentElement.querySelector('div.product__quantity-value').textContent))
            );
        }
   

    }   


    if ( prodCart.childElementCount === 0 ) {
   
        prodCart.appendChild(createElement(
            this.parentElement.parentElement.parentElement.getAttribute('data-id'), 
            this.parentElement.parentElement.parentElement.querySelector('img').getAttribute('src'),
            Number (this.parentElement.parentElement.parentElement.querySelector('div.product__quantity-value').textContent))
        );
    }

}



for (let i = 0; i < productDec.length; i++){
    productDec[i].onclick = prodDec;
}

for (let j = 0; j < productInc.length; j++){
    productInc[j].onclick = prodInc;
}


for (let k = 0; k < productAdd.length; k++){
    productAdd[k].onclick = prodAdd;
}

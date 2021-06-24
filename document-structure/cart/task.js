let productDec = document.getElementsByClassName('product__quantity-control_dec');
let productInc = document.getElementsByClassName('product__quantity-control_inc');
let productAdd = document.getElementsByClassName('product__add');

let productItem = document.getElementsByClassName('product__quantity');

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
    let k = this.parentElement.parentElement.parentElement.getAttribute('data-id') ;
    let n = Number (this.parentElement.parentElement.parentElement.querySelector('div.product__quantity-value').textContent);
    
    if ( prodCart.childElementCount > 0 ){    
        let prodInCart = prodCart.getElementsByClassName('cart__product'); 
        let arr = (Array.from(prodInCart).find(function(element){
              
        if ( element.getAttribute('data-id') === k ){    
            element.querySelector('div.cart__product-count').textContent = Number(element.querySelector('div.cart__product-count').textContent) + n;
            return(element);   
            }

        }));
           
        if(arr == undefined) {
            prodCart.appendChild(createElement(
            this.parentElement.parentElement.parentElement.getAttribute('data-id'), 
            this.parentElement.parentElement.parentElement.querySelector('img').getAttribute('src'),
            Number (this.parentElement.parentElement.parentElement.querySelector('div.product__quantity-value').textContent))); 
        }
    }

    else {
        prodCart.appendChild(createElement(
        this.parentElement.parentElement.parentElement.getAttribute('data-id'), 
        this.parentElement.parentElement.parentElement.querySelector('img').getAttribute('src'),
        Number (this.parentElement.parentElement.parentElement.querySelector('div.product__quantity-value').textContent)));  
        }
 
 }

for (let i = 0; i < productItem.length; i++){
    productItem[i].querySelector('div.product__quantity-control_dec').onclick = prodDec;
    productItem[i].querySelector('div.product__quantity-control_inc').onclick = prodInc;
    productItem[i].querySelector('div.product__add').onclick = prodAdd;
}

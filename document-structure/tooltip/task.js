let links = document.getElementsByClassName('has-tooltip');

function tooltipShow(){
    
    if (this.nextSibling.className !='tooltip tooltip_active'){
        this.nextSibling.classList.add('tooltip_active');
        this.nextSibling.setAttribute('style', `left: ${this.getBoundingClientRect().left}px; top: ${this.getBoundingClientRect().top+20}px`);
    }
    else {
        this.nextSibling.classList.remove('tooltip_active');
    }
   
    return (false);
}

for (let i = 0; i < links.length; i++) {
    links[i].insertAdjacentHTML('afterEnd',`<div class="tooltip">${links[i].getAttribute('title')}</div>`);
    links[i].onclick = tooltipShow;
}
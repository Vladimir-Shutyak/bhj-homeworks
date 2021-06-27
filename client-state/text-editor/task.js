let textArea =  document.getElementById('editor');
textArea.value = localStorage.getItem('text');

textArea.onchange= ()=>{
    localStorage.setItem('text', textArea.value);
    return (false);
}




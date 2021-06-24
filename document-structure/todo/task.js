const btm = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
const taskDesc = document.getElementById('task__input');

function taskCreateElem(taskText){
    let newTaskDiv = document.createElement('div');
    newTaskDiv.setAttribute('class', 'task');
    
    let newTaskTitle = document.createElement('div');
    newTaskTitle.setAttribute('class','task__title');
    newTaskTitle.textContent = taskText;

    let newTaskRemove = document.createElement('a');
    newTaskRemove.setAttribute('href','#');
    newTaskRemove.setAttribute('class','task__remove');
    newTaskRemove.textContent='\u00d7';

    newTaskDiv.appendChild(newTaskTitle);
    newTaskDiv.appendChild(newTaskRemove);
    
    return (newTaskDiv);
}


 function taskAdd(){

    if ( (taskDesc.value.trim() !='') ) {
        taskList.appendChild( taskCreateElem(taskDesc.value));
        let btmRemove = document.getElementsByClassName('task__remove');
        
        for (let i = 0; i < btmRemove.length; i++){
            btmRemove[i].onclick = taskDelete;
        }
    
        taskDesc.value = '';
        return (false);
    }

 }

function taskDelete(){
    this.parentElement.remove();
}

btm.setAttribute('type', 'button');
btm.addEventListener('click', taskAdd);
taskDesc.addEventListener('keydown', (event) => {
    
    if (event.key === 'Enter')  {
        taskAdd();
        event.preventDefault();
    }
    
})

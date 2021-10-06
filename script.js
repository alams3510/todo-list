 localStorage.tasks=JSON.stringify([]);
updateList();
function addEvent(){
    //get input from input box
    let input=document.getElementById('task_input');
    // get tasks from local storage and store tasks  (array)
    let tasksArr=JSON.parse(localStorage.tasks);
    //push (new element) into array
    tasksArr.push(input.value)
    //update that array to local storage
    localStorage.tasks=JSON.stringify(tasksArr);
    // empty the input  box
    input.value="";
    //update list
    updateList();
}
function updateList(){
    //get refrence ul
    let ul=document.getElementById('tasks');
    //get tasks from localstorage
    let tasksArr=JSON.parse(localStorage.tasks);
    let html='';
    for(let i=tasksArr.length-1;i>=0;i--){
html+='<li class="list-group-item" id="'+ i +'">'+ tasksArr[i] +' <span class="btn btn-danger btn-sm float-right remove_btn" onclick="removeitem(this)">Remove</span></li>';
    }
    ul.innerHTML=html;
}


//removing elements from here


function removeitem(obj){
    let id=obj.parentElement.id;
    //get array tasks
    let tasksArr=JSON.parse(localStorage.tasks);
    //update tasks array(remove)
    tasksArr.splice(id,1);
    //update local storage (new array)
    localStorage.tasks=JSON.stringify(tasksArr);
    updateList();
}

//Selecting all the HTML Elements

let input = document.querySelector('.inputfield');
let submitButton = document.querySelector(".submitbutton");
let itemsContainer = document.querySelector(".itemscontainer");
let li = document.querySelectorAll('li');
let resetButton = document.querySelector(".resetbutton");


//Array for storing the data in Local Storage
let todos = []
function getFromLocalStorage() {
    const  toDoItems= localStorage.getItem('todos');
    if (toDoItems) {
      todos = JSON.parse(toDoItems);
   }
   renderToDo()
  }

getFromLocalStorage()


function renderToDo(){
    todos.forEach( function(item, index){
        let itemIndex = index;
        console.log(itemIndex);
        let li = document.createElement('li');
        li.className = "bg-slate-900 text-white rounded mt-1 mr-1"
        li.append(item);
        let button = document.createElement('button');
        button.className = "rounded px-2 ml-12 text-xs bg-slate-300 text-black"
        button.append(document.createTextNode("Delete"));
        li.append(button);
        resetButton.before(li);
        button.addEventListener('click', function(){
            li.remove();
           todos.splice(index, 1);
           addToLocalStorage();


        } )
        li.addEventListener('click', function(){
            li.classList.toggle('done');
        })
    }
    )
    }



//Function to create a to do item using mouse
function createToDo(){
    if(input.value.length > 0){
        let li = document.createElement('li');
        li.className = "bg-slate-900 text-white rounded mt-1 mr-1"
        li.append(input.value);
        let button = document.createElement('button');
        button.append(document.createTextNode("Delete"));
        button.className = "rounded px-2 ml-12 text-xs bg-slate-300 text-black"
        li.append(button);
        resetButton.before(li);
        todos.push(input.value)
        input.value = '';
        button.addEventListener('click', function(){
            // console.log(todos);
            todos.pop();
            addToLocalStorage();
            // console.log(todos);
            li.remove();
        } )
        li.addEventListener('click', function(){
            li.classList.toggle('done');

        })
    }
  
   addToLocalStorage()
}


function createToDoWithKeyboard(e){
    if(input.value.length > 0 && e.which === 13){
        let li = document.createElement('li');
        li.className = "bg-slate-900 text-white rounded mt-1 mr-1"
        li.append(input.value);
        let button = document.createElement('button');
        button.append(document.createTextNode("Delete"));
        button.className = "rounded px-2 ml-12 text-xs bg-slate-300 text-black"
        li.append(button);
        resetButton.before(li);
        todos.push(input.value)
        input.value = '';
        button.addEventListener('click', function(){
            // console.log(todos);
            todos.pop();
            addToLocalStorage();
            // console.log(todos);
            li.remove();
        } )
        li.addEventListener('click', function(){
            li.classList.toggle('done');

        })
    }
  
   addToLocalStorage()
}


function addToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

submitButton.addEventListener('click', createToDo)
input.addEventListener('keypress', createToDoWithKeyboard)
resetButton.addEventListener('click', function(){
    localStorage.clear()
    location.reload()
})

//Selecting all the HTML Elements

let input = document.querySelector('.inputfield');
let submitButton = document.querySelector(".submitbutton");
let itemsContainer = document.querySelector(".itemscontainer");
let li = document.querySelectorAll('li');



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
        li.append(item);
        let button = document.createElement('button');
        button.append(document.createTextNode("x"));
        li.append(button);
        itemsContainer.append(li);
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



//Function to create a to do item
function createToDo(){
    if(input.value.length > 0){
        let li = document.createElement('li');
        li.append(input.value);
        let button = document.createElement('button');
        button.append(document.createTextNode("x"));
        li.append(button);
        itemsContainer.append(li);
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




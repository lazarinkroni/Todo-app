/// Selectors
const todoInput = document.querySelector('.todo-imput');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


/// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


/// Functions

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
   // Create a Todo Div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');

   // Create the Li (list)
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);

   // Create a Check Mark Button
   const completeButton = document.createElement('button');
   completeButton.innerHTML = '<i class="fas fa-check"></i>';
   completeButton.classList.add('complete-btn');
   todoDiv.appendChild(completeButton);

   // Create a Trash Mark Button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
   trashButton.classList.add('trash-btn');
   todoDiv.appendChild(trashButton);

   // Append to List
   todoList.appendChild(todoDiv);

   // Clear Todo Input Value
   todoInput.value = '';


}


// Delete Item Function
function deleteCheck(e) {
    const item = e.target;
    // Delete Todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // When Removing an Item It Falls Away
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    /// Check Mark Clicking on Green Button to Mark as COMPLETED
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();


//Function to load all event Listeners
function loadEventListeners() {

  //add task event
  form.addEventListener('submit', addTask);

  //delete individual tasks
  taskList.addEventListener('click', deleteTask);


  //clear all tasks
  clearBtn.addEventListener('click', clearAllTasks);

}

//Function: Add Task
function addTask(e) {
  //alert if nothing is input
  if (taskInput.value === '') {
    alert('Add a task');
  }

  //create li element for the task
  const li = document.createElement('li');
  //add a class to the li
  li.className = 'collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  //Add class to the link (secondary-content class in Materialize will set the content to the right)
  link.className = 'delete-item secondary-content';
  //Add icon html
  link.innerHTML = '<i class="material-icons">clear</i>';
  //Append the link to the li
  li.appendChild(link);

  //Append li to the ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = '';

  //console.log(taskList);

  e.preventDefault();
}

// Function to clear an individual task
function deleteTask(e) {
  //target of the icon is the icon tag, so we need to check to see if the parent, the 'a' tag contains 'delete-item' in its class list
  if (e.target.parentElement.classList.contains('delete-item')) {
    //console.log(e.target);
    //we then want to remove the list item (li) and we will need to target the parent of the parent. 
    e.target.parentElement.parentElement.remove();
  }


}


//function to clear all the tasks on the list
function clearAllTasks() {
  console.log('this will delete all of the tasks');
}



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
  //DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task event
  form.addEventListener('submit', addTask);

  //delete individual tasks
  taskList.addEventListener('click', deleteTask);

  //clear all tasks
  clearBtn.addEventListener('click', clearAllTasks);

  //filter tasks
  filter.addEventListener('keyup', filterTasks);

}


//Get tasks from Local Storage
function getTasks() {

  loadUserTasks();
  // let tasks;
  // //check local storage to see if anything is stored
  // if (localStorage.getItem('tasks') === null) {
  //   tasks = [];
  // } else {
  //   //add items in local storage to the tasks array
  //   tasks = JSON.parse(localStorage.getItem('tasks'));
  // }
  //forEach loop to loop through the array of tasks
  tasks.forEach(function (task) {
    //create li element for the task
    const li = document.createElement('li');
    //add a class to the li
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(task));
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

  })
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

  //store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //Clear input
  taskInput.value = '';

  //console.log(taskList);

  e.preventDefault();
}

//function to load the tasks and to simplify other functions
function loadUserTasks() {
  //create a variable called tasks
  let tasks;
  //if there are no items in local storage with the key of 'tasks, set variable tasks to an empty array
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
    //else set tasks to what is local storage parsing the strings into objects
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

//function to store user inputted tasks to local storage
function storeTaskInLocalStorage(task) {
  loadUserTasks();

  // //create a variable called tasks
  // let tasks;
  // //if there are no items in local storage with the key of 'tasks, set variable tasks to an empty array
  // if (localStorage.getItem('tasks') === null) {
  //   tasks = [];
  //   //else set tasks to what is local storage parsing the strings into objects
  // } else {
  //   tasks = JSON.parse(localStorage.getItem('tasks'));
  // }
  //push those values input to the tasks array
  tasks.push(task);
  //set local storage with a key of tasks and a string of the task value
  localStorage.setItem('tasks', JSON.stringify(tasks));

}


// Function to clear an individual task
function deleteTask(e) {
  //target of the icon is the icon tag, so we need to check to see if the parent, the 'a' tag contains 'delete-item' in its class list
  if (e.target.parentElement.classList.contains('delete-item')) {
    //console.log(e.target);
    if (confirm('Are you sure you want to remove?')) {
      //we then want to remove the list item (li) and we will need to target the parent of the parent. 
      e.target.parentElement.parentElement.remove();
      //console.log(e.target.parentElement.parentElement.innerText);
      //remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//Remove from Local Storage
function removeTaskFromLocalStorage(taskItem) {

  loadUserTasks();
  // let tasks;
  // //check local storage to see if anything is stored
  // if (localStorage.getItem('tasks') === null) {
  //   tasks = [];
  // } else {
  //   //add items in local storage to the tasks array
  //   tasks = JSON.parse(localStorage.getItem('tasks'));
  // }

  tasks.forEach(function (task, index) {

    if (taskItem.firstChild.textContent === task) {
      tasks.splice(index, 1)
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));


}


//function to clear all the tasks on the list
function clearAllTasks() {
  //test that I am targeting the 'clear tasks' button
  //console.log('this will delete all of the tasks');

  //taskList.innerHTML = "";

  // while loop is faster method of removing tasks
  while (taskList.firstChild) {

    taskList.removeChild(taskList.firstChild);
  }

}

//filter the tasks
function filterTasks(e) {
  //grab the text that is input
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

}

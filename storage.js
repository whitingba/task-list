//set local storage item
//stays until cleared vs. session which clears when browser is closed

//localStorage.setItem('name', 'Barbara');

// //set session storage
// sessionStorage.setItem('name', 'Barbara');

//remove item from storage
//localStorage.removeItem('name');

//get from storage
// const name1 = localStorage.getItem('name');
// console.log(name1);

// //clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit',
  function (e) {
    //console.log(123);
    //grab the value input into the new task form
    const task = document.getElementById('input-task').value;
    //console.log(task);

    //need to create an array of tasks
    let tasks;
    //if local storage tasks is empty
    if (localStorage.getItem('tasks') === null) {
      //then create an empty array
      tasks = [];
      //otherwise parse the tasks array into JavaScripts objects
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //push a task into the tasks array
    tasks.push(task);

    //set new item in localstorage as a string in the tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert(`Your task "${task}" was saved`);
    e.preventDefault();
  })

//   //this will give us the array of tasks
//onst tasks = localStorage.getItem('tasks');
//if we were to do a for loop on this array we would get each individual item in the array, we need to parse it
// console.log(tasks);


const tasks = JSON.parse(localStorage.getItem('tasks'));
for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i]);
}
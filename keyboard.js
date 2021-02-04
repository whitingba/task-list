const form = document.querySelector('form');
const taskInput = document.getElementById('input-task');
const heading = document.querySelector('h5');

//clear form
// taskInput.value = ' ';

//eventListeners: 'submit', 'keydown'
//form.addEventListener('keydown', runEvent);
//keyup
//form.addEventListener('keyup', runEvent);
//keypress
//form.addEventListener('keypress', runEvent);
//focus  - when you click in the input
//taskInput.addEventListener('focus', runEvent);
//blur - click outside the input
//taskInput.addEventListener('blur', runEvent);
//Cut - when using cut or CTRL X
//taskInput.addEventListener('cut', runEvent);
//Paste - when using paste or CTRL V
//taskInput.addEventListener('paste', runEvent);
//Input - anything done with the input field
//taskInput.addEventListener('input', runEvent);




function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  //change the heading task with what is input in the form field
  //heading.innerText = e.target.value;

  //get input value
  //console.log(taskInput.value);

  // e.preventDefault();
}
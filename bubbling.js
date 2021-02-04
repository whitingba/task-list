//EVENT BUBBLING - click on a child element and the parent element functions will be called as well

// document.querySelector('.card-title').addEventListener('click',
//   function () {
//     console.log('card title');
//   });

// document.querySelector('.card-content').addEventListener('click',
//   function () {
//     console.log('card content');
//   });

// document.querySelector('.card').addEventListener('click',
//   function () {
//     console.log('card');
//   });

// document.querySelector('.col').addEventListener('click',
//   function () {
//     console.log('col');
//   });


//EVENT DELAGATION - used when there are sibling elements or elements that are dynamically added through JS 
//event delagation - (put the listener on a parent of what you are looking for put a condition to find the target then adding the functionality )

// document.querySelector('.delete-item').addEventListener('click',
//   function () {
//     console.log('delete item');
//   })
//const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {

  //find the target
  //console.log(e.target);
  // if (e.target.className === 'material-icons') {
  //   console.log('delete-item');
  // }

  //target the anchor tag instead, but if we were to modify the class name this will become an issue...
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete-item')
  // }

  //so instead use 'classList'.'contains() method to see if a class is in the list so if classes are added later this would not be an issue
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete-item')
    //target the element for removal
    //(the target is the icon, the parent is the a tag and the parent of the a tag is the li element)
    e.target.parentElement.parentElement.remove();
  }
}
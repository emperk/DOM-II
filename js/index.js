// Your code goes here

// MOUSEOVER //

let headNavLinks = document.querySelector('.nav');

// headNavLinks.addEventListener("mouseenter", function (event) {
//     event.target.style.color = "red";
//     setTimeout(function() {
//         event.target.style.color = "";
//     }, 500);
// }, false);

headNavLinks.addEventListener("mouseover", function (event) {
    event.target.style.color = "hotpink";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

// KEYDOWN //

let keyDownPageColor = document.querySelector('body');

keyDownPageColor.addEventListener("keydown", function(event) {
    event.target.style.color = "green";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500)
}, false);

// KEYUP //

let keyUpPageColor = document.querySelector('body');

keyUpPageColor.addEventListener("keyup", function(event) {
    event.target.style.color = "blue";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500)
}, false);

// WHEEL //

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const el = document.querySelector('.img-content');
  el.onwheel = zoom;

// DBLCLICK //

let funBusTitle = document.querySelector('.logo-heading');

funBusTitle.addEventListener('dblclick', function (event) {
  event.target.style.color = "orange";
  setTimeout(function() {
      event.target.style.color = "";
  }, 500)

}, false);

// LOAD //

// const log = document.querySelector('.logo-heading');
// // const reload = document.querySelector('.logo-heading');

// log.addEventListener('click', () => {

// })




// reload.addEventListener('click', () => {
//   log.textContent ='';
//   window.setTimeout(() => {
//       window.location.reload(true);
//   }, 200);
// });

// window.addEventListener('load', (event) => {
//     log.textContent = log.textContent + 'load\n';
// });

// document.addEventListener('readystatechange', (event) => {
//     log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     log.textContent = log.textContent + `DOMContentLoaded\n`;
// });

// SELECT //

function titleSelection(event) {
    // const titleSelect = document.querySelector('.logo-heading');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    // titleSelect.textContent = `You selected: ${selection}`;
    console.log("You selected: ", {selection})
  }
  
let logoHead = document.querySelector('.logo-heading');
titleSelection.addEventListener('select', logSelection);





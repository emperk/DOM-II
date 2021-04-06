// Your code goes here

// SELECTORS //

// let headNavLinks = document.querySelectorAll('.nav-link');

// headNavLinks.addEventListener("mouseenter", function (event) {
//     event.target.style.color = "red";
//     setTimeout(function() {
//         event.target.style.color = "";
//     }, 500);
// }, false);

// headNavLinks.addEventListener("mouseover", function (event) {
//     event.target.style.color = "hotpink";
//     setTimeout(function() {
//         event.target.style.color = "";
//     }, 500);
// }, false);



let headNavLinks = document.querySelectorAll("nav");

headNavLinks.addEventListener("mouseover", function( event ) {
  event.target.style.color = "red";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


// headNavLinks.addEventListener("mouseover", function( event ) {
//   event.target.style.color = "orange";
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);


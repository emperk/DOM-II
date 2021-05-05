// Your code goes here

// 1. mouseover //

let funBusHeading = document.querySelector(".logo-heading");

funBusHeading.addEventListener("mouseover", function (event) {
    event.target.style.color = "hotpink";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

// 2. keydown // 

let bodyTextContent = document.querySelector("body");

bodyTextContent.addEventListener("keydown", function (event) {
    event.target.style.color = "orange";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500)
}, false)

// 3. double click //

let mainNavHeader = document.querySelector('.main-navigation');

mainNavHeader.addEventListener('dblclick', function (event) {
  event.target.style.background = "green";
  setTimeout(function() {
      event.target.style.background = "";
  }, 500)

}, false);

// 4. select //

// function destinationSelection(event) {
//   const destination = document.getElementsByClassName(".content-destination");
//   const selection = event.target.style.background = "purple";
//   setTimeout
// }

// destinationDiv.addEventListener('select', function (event) {
//     event.target.style.background = "purple";
//     setTimeout(function() {
//         event.target.style.background = "";
//     }, 500)
// }, false);
// let destinationDiv = document.querySelector('.content-destination');

// 5. click //

bodyTextContent.addEventListener("click", function (event) {
  event.target.style.color = "purple";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500)
}, false);



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

let allTextContent = document.querySelector("body");

allTextContent.addEventListener("keydown", function (event) {
    event.target.style.color = "orange";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500)
}, false)

// 3. select //

let funBusTitle = document.querySelector('.main-navigation');

funBusTitle.addEventListener('dblclick', function (event) {
  event.target.style.background = "green";
  setTimeout(function() {
      event.target.style.background = "";
  }, 500)

}, false);
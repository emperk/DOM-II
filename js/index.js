// Your code goes here

// 1. mouseover //

let funBusHeading = document.querySelector(".logo-heading");

funBusHeading.addEventListener("mouseover", function (event) {
    event.target.style.color = "hotpink";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

// 2. 
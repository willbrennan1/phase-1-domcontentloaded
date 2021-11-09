// Your code goes here

document.addEventListener("DOMContentLoaded", (event) => {
    let p = document.querySelector('#text');
    p.textContent = "This is really cool!";
    
    console.log("DOM fully loaded");
});

console.log("Did the DOM load?");
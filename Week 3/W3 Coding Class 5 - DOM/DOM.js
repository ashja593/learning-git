/*
document.body.innerHTML = "<h1>Kia Ora<h1>"
function changeColor() {
    const color = document.body.style.background
    if (color === "red") {
        document.body.style.background = "white"
    } else {
    document.body.style.background = "red";
    }
}


let currentColor = 0;

function cycleColors() {
    const colors = ["white", "orange", "red", "green", "blue", "purple"]
    
    if (currentColor === colors.length -1) {
        currentColor = 0;
    } else {
        currentColor++;
    }
    document.body.style.background = colors[currentColor];
}
*/

const number = document.getElementById("number")

function addNum() {
    number.textContent++
}

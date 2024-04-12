let bigBoxColorChange = document.getElementById("big_box");
let redChangeButton = document.getElementById("red_button");
let blueChangeButton = document.getElementById("blue_button");
let greenChangeButton = document.getElementById("green_button");

redChangeButton.addEventListener("click", function() {
    bigBoxColorChange.style.backgroundColor = "red";
});

blueChangeButton.addEventListener("click", function() {
    bigBoxColorChange.style.backgroundColor = "blue";
});

greenChangeButton.addEventListener("click", function() {
    bigBoxColorChange.style.backgroundColor = "green";
});

// redChangeButton.onclick=function() {
//     bigBoxColorChange.style.backgroundColor = "red";
// };

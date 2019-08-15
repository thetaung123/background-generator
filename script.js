var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // .className for selecting classes
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// body.style.background = "red";

function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"; // adding textContents  in css
}

color1.addEventListener("input",setGradient); // addEventListener is a function ,so, setGradient automatically runs whenever it runs, so, don't need brackets
color2.addEventListener("input",setGradient);


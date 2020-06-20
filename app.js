var css = document.querySelector("h3");
var couleur1 = document.querySelector(".couleur1");
var couleur2 = document.querySelector(".couleur2");
var body = document.getElementById("gradient")

function setGradient(){
    body.style.background ="linear-gradient(to right, " 
    + couleur1.value 
    + ", " 
    + couleur2.value 
    + ")";

    css.textContent = body.style.background + ";";
}
couleur1.addEventListener("input", setGradient);
couleur2.addEventListener("input", setGradient);

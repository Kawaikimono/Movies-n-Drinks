// Materialize Javascript

//movie & drink selection
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var options = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});

//hide all the other tabs
var moviePromptDiv = document.querySelector("#movie-prompt");
var movieSearchDiv = document.querySelector("#movie-search");
var drinkPromptDiv = document.querySelector("#drink-prompt")
var drinkSearchDiv = document.querySelector("#drink-search")
movieSearchDiv.hidden = true;
drinkSearchDiv.hidden = true;
drinkPromptDiv.hidden = true;

//movie prompt yes button to show search movie div
var moviePromptYesBtn = document.querySelector(".movie-confirm");
moviePromptYesBtn.addEventListener("click", promptmovie);

function promptmovie() {
  if (event.target.matches("button")) {
    console.log();
    moviePromptDiv.classList.remove("animate__delay-1s");
    moviePromptDiv.classList.add("animate__fadeOut");
    movieSearchDiv.classList.add("animate__fadeIn");
    movieSearchDiv.hidden = false;
  }
}

//movie action btn to show drink prompt
var movieActionBtn = document.querySelector("#movieactionbtn")
movieActionBtn.addEventListener("click",promptdrink)
function promptdrink() {
    if (event.target.matches("button")) {
      console.log();
      movieSearchDiv.classList.add("animate__fadeOut");
      drinkPromptDiv.classList.add("animate__fadeIn");
      drinkPromptDiv.hidden = false;
    }
  }
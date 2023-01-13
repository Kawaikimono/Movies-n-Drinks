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
var movieSearchResultDiv = document.querySelector("#movie-collection-3");
var drinkPromptDiv = document.querySelector("#drink-prompt");
var drinkSearchDiv = document.querySelector("#drink-search");
var drinkCardDiv = document.querySelector("#drink-card");

movieSearchDiv.hidden = true;
movieSearchResultDiv.hidden = true;
drinkPromptDiv.hidden = true;
drinkSearchDiv.hidden = true;
drinkCardDiv.hidden = true;

var drinkDropdown = document.querySelector(".drink-content");

//movie prompt yes button to show search movie div
var moviePromptYesBtn = document.querySelector(".movie-confirm");
moviePromptYesBtn.addEventListener("click", promptmovie);

function promptmovie() {
  if (event.target.matches("button")) {
    moviePromptDiv.classList.remove("animate__delay-1s");
    moviePromptDiv.classList.add("animate__fadeOut");

    console.log(movieSearchDiv.offsetTop);
    movieSearchDiv.classList.add("animate__fadeIn");
    movieSearchDiv.hidden = false;
    movieSearchDiv.focus();
  }
}

//movie action btn to show drink prompt
var movieActionBtn = document.querySelector("#movieactionbtn");
movieActionBtn.addEventListener("click", moviesearch);
function moviesearch() {
  if (event.target.matches("button")) {
    movieSearchDiv.classList.add("animate__fadeOut");
    movieSearchResultDiv.classList.add("animate__fadeIn");
    movieSearchResultDiv.hidden = false;
  }
}

//select movie to prompt drink
var movieChoiceBtn = document.querySelector(".movie-choice");
console.log(movieChoiceBtn);
movieChoiceBtn.addEventListener("click", promptdrink);
function promptdrink() {
  if (event.target.matches("button")) {
    movieSearchResultDiv.classList.add("animate__fadeOut");
    drinkPromptDiv.classList.add("animate__fadeIn");
    drinkPromptDiv.hidden = false;
  }
}

//yes on drink prompt btn to show drink search
var drinkConfirmBtn = document.querySelector(".drink-confirm ");
drinkConfirmBtn.addEventListener("click", drinksearch);
function drinksearch() {
  if (event.target.matches("button")) {
    drinkPromptDiv.classList.add("animate__fadeOut");
    drinkSearchDiv.classList.add("animate__fadeIn");
    drinkSearchDiv.hidden = false;
  }
}

//drink search btn to show drink card
var drinkBtn = document.querySelector(".drinkbtn");
drinkBtn.addEventListener("click", drinkcard);

function drinkcard() {
  if (event.target.matches("button")) {
    drinkSearchDiv.classList.add("animate__fadeOut");
    drinkCardDiv.classList.add("animate__fadeIn");
    drinkCardDiv.hidden = false;
  }
}

//don't want movie then prompt drink
var movieCancelBtn = document.querySelector("#movie-cancel");
movieCancelBtn.addEventListener("click", nomoviedrinkprompt);
function nomoviedrinkprompt() {
  if (event.target.matches("button")) {
    moviePromptDiv.classList.add("animate__fadeOut");
    drinkPromptDiv.classList.add("animate__fadeIn");
    drinkPromptDiv.hidden = false;
  }
}
// Carousel sliders

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instance = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    numVisible: 5,
  });
});

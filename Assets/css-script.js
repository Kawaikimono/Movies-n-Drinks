// Materialize Javascript
var moviePromptDiv = document.querySelector("#movie-prompt");
var movieSearchDiv = document.querySelector("#movie-search");
var movieSearchResultDiv = document.querySelector("#movie-collection-3");
var movieCardDiv = document.querySelector("#movie-card");
var drinkPromptDiv = document.querySelector("#drink-prompt");
var drinkSearchDiv = document.querySelector("#drink-search");
var drinkCardDiv = document.querySelector("#drink-card");
var sideBarBtn = document.querySelector("#sidebar-indicator");

//hide all div elements at the start
movieSearchDiv.hidden = true;
movieSearchResultDiv.style.opacity = "0";
movieCardDiv.hidden = true;
drinkPromptDiv.hidden = true;
drinkSearchDiv.hidden = true;
drinkCardDiv.hidden = true;
sideBarBtn.hidden = true;

//movie prompt yes button to show search movie div
var moviePromptYesBtn = document.querySelector(".movie-confirm");
moviePromptYesBtn.addEventListener("click", promptmovie);

function promptmovie() {
  if (event.target.matches("button")) {
    moviePromptDiv.classList.remove("animate__delay-1s");
    // moviePromptDiv.classList.add("animate__fadeOut");
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
    // movieSearchDiv.classList.add("animate__fadeOut");
    movieSearchResultDiv.style.opacity = "1";
    movieSearchResultDiv.classList.add("animate__fadeIn");
  }
}

//select movie to prompt drink
var movieChoiceBtn = document.querySelector(".movie-choice");
movieChoiceBtn.addEventListener("click", promptdrink);
function promptdrink() {
  if (event.target.matches("button")) {
    // movieSearchResultDiv.classList.add("animate__fadeOut");
    drinkPromptDiv.classList.add("animate__fadeIn");
    // movieSearchResultDiv.style.opacity = "0";
    // movieSearchResultDiv.classList.add("animate__fadeOut");
    drinkPromptDiv.hidden = false;
  }
}

//yes on drink prompt btn to show drink search
var drinkConfirmBtn = document.querySelector(".drink-confirm ");
drinkConfirmBtn.addEventListener("click", drinksearch);
function drinksearch() {
  if (event.target.matches("button")) {
    // drinkPromptDiv.classList.add("animate__fadeOut");
    drinkSearchDiv.classList.add("animate__fadeIn");
    drinkSearchDiv.hidden = false;
  }
}

//drink search btn to show movie & drink card
var finalTagEl = document.querySelector("#final-tag");
var drinkBtn = document.querySelector(".drinkbtn");
drinkBtn.addEventListener("click", drinkcard);

function drinkcard() {
  if (event.target.matches("button")) {
    // drinkSearchDiv.classList.add("animate__fadeOut");
    movieCardDiv.classList.add("animate__fadeIn");
    drinkCardDiv.classList.add("animate__fadeIn");
    movieCardDiv.hidden = false;
    drinkCardDiv.hidden = false;
    finalTagEl.classList.add("animate__lightSpeedInLeft");
    sideBarBtn.classList.add("animate__fadeIn");
    sideBarBtn.hidden = false;
    finalTagEl.textContent = "Here is the recipe of your wonderful night.";
  }
}

//don't want movie then prompt drink
var movieCancelBtn = document.querySelector("#movie-cancel");
movieCancelBtn.addEventListener("click", nomoviedrinkprompt);
function nomoviedrinkprompt() {
  if (event.target.matches("button")) {
    // moviePromptDiv.classList.add("animate__fadeOut");
    drinkPromptDiv.classList.add("animate__fadeIn");
    drinkPromptDiv.hidden = false;
  }
}

var drinkCancelBtn = document.querySelector(".drinkcancel");
drinkCancelBtn.addEventListener("click", showdrink);
function showdrink() {
  movieCardDiv.classList.add("animate__fadeIn");
  movieCardDiv.hidden = false;
  sideBarBtn.classList.add("animate__fadeIn");
  sideBarBtn.hidden = false;
  finalTagEl.textContent = "Here is the recipe of your wonderful night.";
}

//movie & drink selection
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var options = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});

// Carousel sliders
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instance = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    numVisible: 5,
  });
});

//side-bar
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, { preventScrolling: true });
});

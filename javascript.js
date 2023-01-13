var movieactionbtn = document.getElementById("movieactionbtn");
var genreID = document.getElementById("movie-id");
var drinkAlchol = document.getElementsByClassName("drink-content");
var drink;
var movieTitle = document.querySelector("#movie-title");
var movieSummary = document.querySelector("#movie-intro");
var movieImageEl = document.querySelector("#movie-poster");
var movieGenre = document.querySelector("#movie-genre");
console.log(movieImageEl);

var movieTitle = "";
var movieSummary = "";
var moviePosterURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

function getMovieApi() {
  console.log(genreID.value);
  var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US&with_genres=${genreID.value}`;
  fetch(movieUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < 3; i++) {
        var randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];
        console.log(randomMovie.title);
        console.log(randomMovie.overview);
        console.log(randomMovie.poster_path);
        console.log(moviePosterURL + randomMovie.poster_path);
        movieTitle.textContent = randomMovie.title;
        movieSummary.textContent = randomMovie.overview;
        var randomPosterLink = moviePosterURL + randomMovie.poster_path;
        movieImageEl.src = randomPosterLink;
        movieGenre.textContent = genreID;
      }
    });
}

function theDrink(data) {
  var randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)];
  var drinkId = randomDrink.idDrink;

  var pullDrinkDets = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

  fetch(pullDrinkDets)
    .then(function (res) {
      return res.json();
    })

    .then(function (res) {
      drink = res.drinks[0];
      console.log(drink);
      var drinkName = drink.strDrink;
      console.log(drinkName);
      printDrink(drink);
      // to add to the page at drink.drinks[0]:
      // strDrink
      // strDrinkThumb = img
      // strIngredient1 if null
      // strInstructions
      // strMeasure1 if null
    });
}

function getDrinkApi() {
  var listOfDrinksUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkAlchol[0].value}`;

  fetch(listOfDrinksUrl)
    .then(function (response) {
      return response.json();
    })
    .then(theDrink);
}

movieactionbtn.addEventListener("click", getMovieApi);

var getDrinkBtn = document.querySelector(".drinkbtn");

function printDrink(drink) {
  var drinkImageLoc = document.querySelector("#drink-img");
  var drinkNameLoc = document.querySelector("#drink-title");
  var drinkIngrLoc = document.querySelector("#ingredients");
  var drinkRecipeLoc = document.querySelector("#Drink-Instruction");
  drinkImageLoc.setAttribute("src", drink.strDrinkThumb);
  drinkNameLoc.textContent = drink.strDrink;
  drinkRecipeLoc.textContent = drink.strInstructions;
  for (var i = 1; i < 16; i++) {
    var ingredient = drink[`strIngredient${i}`];
    var measure = drink[`strMeasure${i}`];
    if (ingredient == null) {
      return;
    }
    if (measure == null) {
      return;
    }
    var ingredientList = document.createElement("li");
    ingredientList.textContent = measure + " " + ingredient;
    drinkIngrLoc.append(ingredientList);
  }

}

movieactionbtn.addEventListener("click", getMovieApi);

getDrinkBtn.addEventListener("click", function () {
  getDrinkApi();
  var drinkImageLoc = document.querySelector("#drink-img");
  var drinkNameLoc = document.querySelector("#drink-title");
  var drinkIngrLoc = document.querySelector("#Ingredients");
  var drinkRecipeLoc = document.querySelector("#Drink-Instruction");
  drinkImageLoc.setAttribute("src", drink.strDrinkThumb);
  drinkNameLoc.textContent(drink.strDrink);
  drinkRecipeLoc.textContent(drink.strInstructions);
  for (var i = 0; i < drink.strIngredient; i++) {
    var drinkMeasure = drink.strMeasure + i + 1;
    var drinkIngr = drink.strIngredient + i + 1;
    drinkMeasure.append(drinkIngr);
    var ingredientList = document.createElement("li");
    ingredientList.textContent(drinkMeasure);
    drinkIngrLoc = ingredientList;
  }
});
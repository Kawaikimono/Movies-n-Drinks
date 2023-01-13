var movieactionbtn = document.getElementById("movieactionbtn");
var drinkId = 0;
var genreID = document.getElementById("movie-id");
var drinkAlchol = document.getElementsByClassName("drink-content");
var movieTitle = "";
var movieSummary = "";

var moviePosterURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
function getMovieApi() {
  console.log(genreID.value);
  movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US&with_genres=${genreID.value}`;
  fetch(movieUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      console.log(randomMovie.title);
      console.log(randomMovie.overview);
      console.log(randomMovie.poster_path);
      console.log(moviePosterURL + randomMovie.poster_path);
      movieTitle = randomMovie.title;
      movieSummary = randomMovie.overview;

      // render movieTitle & movieSummary to page. Static
    });
}

function theDrink(data) {
  var randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)];
  console.log(data);
  var drinkId = randomDrink.idDrink;
  var pullDrinkDets = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

  fetch(pullDrinkDets)
    .then(function (res) {
      return res.json();
    })

    .then(function (drink) {
      console.log(drink.drinks[0]);
      console.log(drink.drinks[0].strDrink);
      // to add to the page at drink.drinks[0]:
      // strDrink
      // strDrinkThumb = img
      // strIngredient1 if null
      // strInstructions
      // strMeasure1 if null
    });
}
// Pulls from list of dirks url
function getDrinkApi() {
  var listOfDrinksUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkAlchol[0].value}`;
  console.log(drinkAlchol[0].value);
  fetch(listOfDrinksUrl)
    .then(function (res) {
      return res.json();
    })
    .then(theDrink);
}

movieactionbtn.addEventListener("click", getMovieApi);

var getDrinkBtn = document.querySelector(".drinkbtn");

getDrinkBtn.addEventListener("click", function () {
  getDrinkApi();
  var drinkImageLoc = document.querySelector("#drink-img");
  var drinkNameLoc = document.querySelector("#drink-title");
  var drinkIngrLoc = document.querySelector("#Ingredient1");
  var drinkRecipeLoc = document.querySelector("#Drink-Instruction");
  // drinkImage.setAttribute("src", drink.drinks[0].strDrinkThumb)
  drinkNameLoc.textContent(drink.drinks[0].strDrink);
  drinkRecipeLoc.textContent(drink.drinks[0].strInstructions);
  for (var d = i; i < drink.drinks[0].strIngredient; i++) {
    var drinkMeasure = drink.drinks[0].strMeasure + i + 1;
    var drinkIngr = drink.drinks[0].strIngredient + i + 1;
    drinkMeasure.append(drinkIngr);
    var ingredientList = document.createElement("li");
    ingredientList.textContent(drinkMeasure);
    drinkIngrLoc = ingredientList;
  }
});

// var selectGenreSelected = document.getElementbyId(genredropbtn)

var movieactionbtn = document.getElementById("movieactionbtn");
var drinkId = 0;
var genreID = document.getElementById("movie-id");
var drinkAlchol = document.getElementsByClassName("drink-content");
var movieTitle = "";
var movieSummary = "";

var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US&with_genres=${genreID.value}`;
var moviePosterURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

function getMovieApi() {
  console.log(genreID.value);
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

var listOfDrinksUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin";
// ${alcohol}
function theDrink(data) {
  var randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)];
  var drinkId = randomDrink.idDrink;

  var pullDrinkDets = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

  fetch(pullDrinkDets)
    .then(function (res) {
      return res.json();
    })

    .then(function (res) {
      var drink = res.drinks[0];
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
  fetch(listOfDrinksUrl)
    .then(function (response) {
      return response.json();
    })
    .then(theDrink);
}

movieactionbtn.addEventListener("click", getMovieApi);

var getDrinkBtn = document.querySelector(".drinkbtn");
getDrinkApi();

        getDrinkBtn.addEventListener("click", function() {
          // getDrinkApi()
          var drinkImageLoc = document.querySelector("#drink-img");
          var drinkNameLoc = document.querySelector("#drink-title");
          var drinkIngrLoc = document.querySelector("#Ingredient1");
          var drinkRecipeLoc = document.querySelector("#Drink-Instruction");
          drinkImage.setAttribute("src", drink.drinks[0].strDrinkThumb)
          drinkNameLoc.textContent(drink.drinks[0].strDrink);
          drinkRecipeLoc.textContent(drink.drinks[0].strInstructions);
          for (var = i; i < drink.drinks[0].strIngredient; i++) {
            var drinkMeasure = drink.drinks[0].strMeasure + i+1;
            var drinkIngr = drink.drinks[0].strIngredient + i+1;
            drinkMeasure.append(drinkIngr);
            var ingredientList = document.createElement("li");
            ingredientList.textContent(drinkMeasure);
            drinkIngrLoc = ingredientList;
          };
        });

function printDrink(drink) {
  var drinkImageLoc = document.querySelector("#drink-img");
  var drinkNameLoc = document.querySelector("#drink-title");
  var drinkIngrLoc = document.querySelector("#Ingredient1");
  var drinkRecipeLoc = document.querySelector("#Drink-Instruction");
  drinkImageLoc.setAttribute("src", drink.strDrinkThumb);
  drinkNameLoc.textContent = drink.strDrink;
  drinkRecipeLoc.textContent = drink.strInstructions;
  for (var i = 1; i < 16; i++) {
    var ingredient = drink[`strIngredient${i}`];
    var measure = drink[`strMeasure${i}`];
    if (ingredient) {
      console.log(ingredient);
      // li.textContent = measure + " " + ingredient
    }
  }

}
getDrinkBtn.addEventListener("click", function () {
  //
});

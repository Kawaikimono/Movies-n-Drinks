// var selectGenreSelected = document.getElementbyId(genredropbtn)

var movieactionbtn = document.getElementById("movieactionbtn");
var drinkId = 0;
var genreID = document.getElementById("movie-id");
var drinkAlchol = document.getElementsByClassName("drink-content");

var movieTitle = document.querySelector ("#movie-title");
var movieSummary = document.querySelector ("#movie-intro");
var movieImageEl = document.querySelector("#movie-poster");
var movieGenre = document.querySelector("#movie-genre");
console.log(movieImageEl);

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
    for (let i = 0; i < 3; i++) {

    var randomMovie = data.results[Math.floor(Math.random()*data.results.length)]
    console.log(randomMovie.title)
    console.log(randomMovie.overview)
    console.log(randomMovie.poster_path)
    console.log(moviePosterURL+randomMovie.poster_path)
    movieTitle.textContent = randomMovie.title
    movieSummary.textContent = randomMovie.overview
    var randomPosterLink = moviePosterURL+randomMovie.poster_path
    movieImageEl.src = randomPosterLink
    movieGenre.textContent = genreID
    }
    // render movieTitle & movieSummary to page. Static


      })
      };

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


        getDrinkBtn.addEventListener("click", function() {
          // getDrinkApi()
          var drinkImageLoc = document.querySelector("#drink-img");
          var drinkNameLoc = document.querySelector("#drink-title");
          var drinkIngrLoc = document.querySelector("#Ingredient1");
          var drinkRecipeLoc = document.querySelector("#Drink-Instruction");
          drinkImage.setAttribute("src", drink.drinks[0].strDrinkThumb)
          drinkNameLoc.textContent(drink.drinks[0].strDrink);
          drinkRecipeLoc.textContent(drink.drinks[0].strInstructions);
          for (var i = 0 ; i < drink.drinks[0].strIngredient; i++) {
            var drinkMeasure = drink.drinks[0].strMeasure + i+1;
            var drinkIngr = drink.drinks[0].strIngredient + i+1;
            drinkMeasure.append(drinkIngr);
            var ingredientList = document.createElement("li");
            ingredientList.textContent(drinkMeasure);
            drinkIngrLoc = ingredientList;
          };
        });

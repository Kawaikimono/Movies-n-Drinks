// var selectGenreSelected = document.getElementbyId(genredropbtn)

var movieactionbtn = document.getElementById("movieactionbtn");
var drinkId = 0;
var genreID = document.getElementById("movie-id");
var drinkAlchol = document.getElementsByClassName("drink-content");

var movieTitle = document.querySelectorAll("#movie-title");
var movieSummary = document.querySelectorAll("#movie-intro");
var movieImageEl = document.querySelectorAll("#movie-poster");
var movieGenre = document.querySelectorAll("#movie-genre");
var movieReleaseDate =document.querySelectorAll("#release-date")
var movieTitle;
var movieSummary;

var movieTrailer1=document.querySelector("#movie-trailer-1")
var movieTrailer2=document.querySelector("#movie-trailer-2")
var movieTrailer3=document.getElementById("movie-trailer-3")
var movieTrailer = []
var h;

movieTrailer.push(movieTrailer1,movieTrailer2,movieTrailer3)

var movieID;

var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US&with_genres=${genreID.value}`;
var moviePosterURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
var apiKey = "c21251ae5e77e4922c5ef1b09e36611a"
var movieid, key;


function getMovieApi() {
  // console.log(genreID.value);
  fetch(movieUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //generate three number to render three movie infor to the page
      h=0;
      for (var i = 0; i < 3; i++) {
        var randomMovie =data.results[Math.floor(Math.random() * data.results.length)];
        movieTitle[i].textContent = randomMovie.title;
        movieSummary[i].textContent = randomMovie.overview;
        var randomPosterLink = moviePosterURL + randomMovie.poster_path;
        movieImageEl[i].src = randomPosterLink;
        movieGenre[i].textContent = genreID.value;
        movieID = randomMovie.id;
        movieReleaseDate[i].textContent = randomMovie.release_date;
        console.log(movieTitle[i])
        console.log(movieID)
        getMovieTrailer(movieID,apiKey);
      }
  })
}

//get video link by movie ID
function getMovieTrailer(movieid,key){
  var movieTrailerURL = `
https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${key}&language=en-US`
  fetch(movieTrailerURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(h)
      console.log(movieTrailer[h])
      movieTrailer[h].src="https://www.youtube.com/embed/"+ data.results[0].key
      h++;
    }
  )}

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

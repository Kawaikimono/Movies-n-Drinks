var movieactionbtn = document.getElementById("movieactionbtn");
var genreID = document.getElementById("movie-id");
var drinkAlchol = document.getElementsByClassName("drink-content");

var drink;
var movieTitle = document.querySelectorAll("#movie-title");
var movieSummary = document.querySelectorAll("#movie-intro");
var movieImageEl = document.querySelectorAll("#movie-poster");
var movieGenre = document.querySelectorAll("#movie-genre");
var movieReleaseDate = document.querySelectorAll("#release-date");
var movieLink = document.querySelectorAll("#movie-link");
var movieLinkCard = document.querySelector("#selected-movie-link");
var movieImgCard = document.querySelector("#card-movie-img");

var movieTrailer1 = document.querySelector("#movie-trailer-1");
var movieTrailer2 = document.querySelector("#movie-trailer-2");
var movieTrailer3 = document.getElementById("movie-trailer-3");
var movieTrailer = [];
var h,j;

movieTrailer.push(movieTrailer1, movieTrailer2, movieTrailer3);

var moviePosterTop = document.querySelectorAll(".movie-poster-top")
nowplayingPosterURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US&page=1`
var movieID;
var moviePosterURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
var apiKey = "c21251ae5e77e4922c5ef1b09e36611a";
var movieid, key;

// show latest movie poster
getMoviePoster()
function getMoviePoster(){
  fetch(nowplayingPosterURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var p=0; p<6;p++){
      moviePosterTop[p].src=moviePosterURL+data.results[p*2].poster_path
    }
  })
}

//get movie list generated
function getMovieApi() {
  var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US&with_genres=${genreID.value}`;
  
  fetch(movieUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //generate three number to render three movie infor to the page
  
      for (var i = 0; i < 3; i++) {
        var randomMovie =data.results[Math.floor(Math.random() * data.results.length)];
        movieTitle[i].textContent = randomMovie.title;
        movieSummary[i].textContent = randomMovie.overview;
        var randomPosterLink = moviePosterURL + randomMovie.poster_path;
        movieImageEl[i].src = randomPosterLink;
        // movieGenre[i].textContent = genreID.value;
        movieID = randomMovie.id;
        movieReleaseDate[i].textContent = randomMovie.release_date;
        getMovieTrailer(movieID,apiKey,i);
        getMovieLink(movieID, apiKey,i);

      }
    });
}


//get video link by movie ID
function getMovieTrailer(movieid,key,h){
  var movieTrailerURL = `
https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${key}&language=en-US`;
  fetch(movieTrailerURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(h)
      // console.log(movieTrailer[h])
      movieTrailer[h].src =
        "https://www.youtube.com/embed/" + data.results[0].key;
      h++;
    });
}


//get movie provider link;
function getMovieLink(movieid, key, j) {
  var movieLinkURL = `https://api.themoviedb.org/3/movie/${movieid}/watch/providers?api_key=${key}`;
  fetch(movieLinkURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.results.US !== {}) {
        movieLink[j].href = data.results.US.link;
      }
    });
}

//When click on the select movie button, get the movie img and render to the movie card
var movieChoiceBtn = document.querySelector(".movie-choice");
var movieImgCard = document.querySelector("#card-movie-img");
var movieTitleCard = document.querySelector("#card-movie-title");
var movieLinkCard = document.querySelector("#card-movie-link")
movieChoiceBtn.addEventListener("click", function () {
  if (event.target.matches("button")) {
    var selectedMovieImg =
      event.target.parentElement.previousElementSibling.children[0].src;
    movieImgCard.src = selectedMovieImg;
    var selectedMovieLink = event.target.parentElement.children[0].children[4].children[1].href
    movieLinkCard.href = selectedMovieLink
  }
});

movieactionbtn.addEventListener("click", getMovieApi);

  //get drink
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
      drink = res.drinks[0];
      console.log(drink);
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

var getDrinkBtn = document.querySelector(".drinkbtn");
getDrinkBtn.addEventListener("click", getDrinkApi);

function getNonAlcApi() {
  var listOfNonAlcUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;

  fetch(listOfNonAlcUrl)
    .then(function (response) {
      return response.json();
    })
    .then(theDrink);
}

var getNonAlcBtn = document.querySelector(".drink-nonalcohol");
getNonAlcBtn.addEventListener("click", getNonAlcApi);

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
    if (measure ==null) {
      return;
    }
    var ingredientList = document.createElement("li");
    ingredientList.textContent = measure + " " + ingredient;
    drinkIngrLoc.append(ingredientList);
  }
}
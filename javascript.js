// var selectAlcoholType = document.getElementbyId(drinkdropbtn)
// var selectGenreSelected = document.getElementbyId(genredropbtn)

var movieactionbtn = document.getElementById("movieactionbtn")
var drinkdropbtn = document.getElementById("drinkdropbtn")
var drinkId = 0
var genreID = document.getElementById("movie-id");
var drinkAlchol = document.getElementsByClassName("drink-content");
var movieTitle = ""
var movieSummary = ""

var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US&with_genres=${genreID.value}`;
var moviePosterURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'

function getMovieApi() {
  
  console.log(genreID.value)
  fetch(movieUrl)
  .then(function (response) {
    return response.json();
    
  }) 
  .then(function (data) {
    var randomMovie = data.results[Math.floor(Math.random()*data.results.length)]
    console.log(randomMovie.title)
    console.log(randomMovie.overview)
    console.log(randomMovie.poster_path)
    console.log(moviePosterURL+randomMovie.poster_path)
    movieTitle = randomMovie.title
    movieSummary = randomMovie.overview
    
        // render movieTitle & movieSummary to page. Static
      })
      };

    
var listOfDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin'
// ${alcohol}
  function theDrink (data){var randomDrink = data.drinks[Math.floor(Math.random()*data.drinks.length)]
    var drinkId = randomDrink.idDrink

    var pullDrinkDets = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    
      fetch(pullDrinkDets)
      .then(function (res) {
        return res.json();
      })
      
        .then(function(drink){
          console.log(drink.drinks[0])
          console.log(drink.drinks[0].strDrink)
          // to add to the page at drink.drinks[0]:
          // strDrink
          // strDrinkThumb = img
          // strIngredient1 if null
          // strInstructions
          // strMeasure1 if null

        })}

    function getDrinkApi() {      
        fetch(listOfDrinksUrl)
          .then(function (response) {
            return response.json();
          })
          .then(theDrink) 
          }

       getDrinkApi()
        movieactionbtn.addEventListener("click", getMovieApi)
        // drinkdropbtn.addEventListener("click", getDrinkApi)

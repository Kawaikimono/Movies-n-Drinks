// var selectAlcoholType = document.getElementbyId(drinkdropbtn)
// var selectGenreSelected = document.getElementbyId(genredropbtn)



var alcohol = ['Gin', 'Tequila', 'Whiskey', 'Scotch', 'Vodka', 'Rum','Brandy' ]
var drinkId = 0
// need to pull 'idDrink'.value to different api loop to search for cocktails

function getMovieApi() {
    var requestUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
        
      }) 
      .then(function (data) {
        console.log(data)
      })
      };

// https://api.themoviedb.org/3/discover/movie?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US&with_genres=12
    
var listOfDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin'
// ${alcohol}
  function theDrink (data){var randomDrink = data.drinks[Math.floor(Math.random()*data.drinks.length)]
    drinkId = randomDrink.idDrink

    var pullDrinkDets = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    
      fetch(pullDrinkDets)
      .then(function (res) {
        return res.json();
      })
        .then(function(drink){
          console.log(drink.drinks[0])

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

        getDrinkApi();
        getMovieApi();

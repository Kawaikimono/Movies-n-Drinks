// var selectAlcoholType = document.getElementbyId(drinkdropbtn)
// var selectGenreSelected = document.getElementbyId(genredropbtn)



var alcohol = ['Gin', 'Tequila', 'Whiskey', 'Scotch', 'Vodka', 'Rum','Brandy' ]
var drinkId = 0
// need to pull 'idDrink'.value to different api loop to search for cocktails

// function getMovieApi() {
//     var requestUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US';

//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
        
//       }) 
//       .then(function (data) {
//         console.log(data)
//       })
//       };

// /discover/movie?with_genres=
    
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
    var getDrinkBtn = document.querySelector(".drinkdropbtn");
          getDrinkBtn.addEventListener("click", function() {
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
        // getMovieApi();

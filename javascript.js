// var selectAlcoholType = document.getElementbyId(drinkdropbtn)
// var selectGenreSelected = document.getElementbyId(genredropbtn)

var genre = ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Family', 'Horror', 'Mystery', 'Romance', 'Thriller']
var genreId = ['28', '12','35','80','18','10751', '27', '9648','10749','53']
var alcohol = ['Gin', 'Tequila', 'Whiskey', 'Scotch', 'Vodka', 'Rum' ]
// need to pull 'strDrink'.value to different api loop to search for cocktails

function getMovieApi() {
    var requestUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US';


    
  
    fetch(requestUrl)
      .then(function (response) {
        console.log(response)
        return response.json();
        
      }) 
      .then(function (data) {
        console.log(data)
      })
      };
    

    
    function getDrinkApi() {
        var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data)
          })
        }

        getDrinkApi();
        getMovieApi();
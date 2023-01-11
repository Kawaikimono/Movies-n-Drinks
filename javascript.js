var alcoholType = input at dropdown
var genreSelected = 

function getMovieApi() {
    var requestUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
        console.log(response)
      })
    }

    function getDrinkApi() {
        var requestUrl = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
        }
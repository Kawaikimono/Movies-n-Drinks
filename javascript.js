// var alcoholType = document.getElementbyId(drinkdropbtn).value
// var genreSelected = document.getElementbyId(genredropbtn).value

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
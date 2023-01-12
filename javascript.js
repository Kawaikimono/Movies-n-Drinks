// var alcoholType = document.getElementbyId(drinkdropbtn).value
// var genreSelected = document.getElementbyId(genredropbtn).value

// function getMovieApi() {
//     var requestUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c21251ae5e77e4922c5ef1b09e36611a&language=en-US';
  
//     fetch(requestUrl)
//       .then(function (response) {
//         console.log(response)
//         return response.json();
        
//       }) 
//       .then(function (data) {
//         console.log(data)
//       })
//       };
    

    
//     function getDrinkApi() {
//         var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
      
//         fetch(requestUrl)
//           .then(function (response) {
//             return response.json();
//           })
//           .then(function (data) {
//             console.log(data)
//           })
//         }

//         getDrinkApi();
//         getMovieApi();


// Materialize Javascript

//movie & drink selection
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var options = document.querySelectorAll('select')
  var instances = M.FormSelect.init(elems, options);
});

//hide all the other tabs
var moviePromptDiv = document.querySelector("movie-prompt")
var movieSearchDiv = document.querySelector("#movie-search")
movieSearchDiv.hidden = true;


//movie prompt yes button
var moviePromptYesBtn = document.querySelector(".movie-confirm")
moviePromptYesBtn.addEventListener("click",promptmovie)

function promptmovie(){
  if (event.target.matches("button")){
    console.log()
    movieSearchDiv.classList.add("animate__fadeInDown")
    movieSearchDiv.hidden = false;
    
  }

}
    
    var searchvalue = localStorage.getItem("searchValue");

    
    fetch(` http://www.omdbapi.com/?s=${searchvalue}&apikey=dda54285`)
    .then((res) => res.json())
    .then((response)=> {

        console.log(response);
        
        let movies = response.Search;
        let output = '';
        
        movies.forEach(movie => {
            
            output += `
            <div class="movieBx space">
                <a onclick="searchSelected('${movie.imdbID}')" class="movie_container" href="#">
                    <img src="${movie.Poster}" alt="Poster">
                </a>
                <div class="popular__names">${movie.Title}</div>
            </div>
             
            `;
        });
        document.getElementById("searchResult").innerHTML = output;
        
        
    })



    // STORAGE  => SERACH MOVIES ID
function searchSelected(id){
    sessionStorage.setItem('searchResultID', id);
    window.location = 'home.html';
    return false;
}


// NAVBAR SEARCH FORM
var forms = document.getElementById("forms");
forms.addEventListener("submit",displayResult);

function displayResult(e){
    e.preventDefault();

    var filterName = document.getElementById("searchFilter");
    localStorage.setItem("searchValue",filterName.value);
    var searchOutput = localStorage.getItem("searchValue")

    fetch(` http://www.omdbapi.com/?s=${searchOutput}&apikey=dda54285`)
    .then((res) => res.json())
    .then((response)=> {
        
        let movies = response.Search;
        let output = '';

        movies.forEach(movie => {
            
            output += `
            <div class="movieBx space">
                <a onclick="searchSelected('${movie.imdbID}')" class="movie_container" href="#">
                    <img src="${movie.Poster}" alt="Poster">
                </a>
                <div class="popular__names">${movie.Title}</div>
            </div>
             
            `;
        });
        document.getElementById("searchResult").innerHTML = output;
        
        filterName.value = "";
    })
}

if (localStorage.getItem("userName")) {
        document.querySelector(".login__btn").style.display = "none";
        document.querySelector('.user__name').innerText = localStorage.getItem("userName");  
    }


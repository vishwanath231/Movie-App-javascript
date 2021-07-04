// HEADER SEARCH FORM
document.querySelector(".forms").style.display = "none";

var form = document.getElementById("form");
form.addEventListener("submit",displayValue);

function displayValue(e){
    e.preventDefault();

    var filterName = document.getElementById("filter");

    localStorage.setItem("searchValue",filterName.value);

    window.location = 'searchResult.html';

}



// API URLS
const API = 'api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a';
const Base_URL ='https://api.themoviedb.org/3/movie/';
const Popular_Movie = `${Base_URL}popular?${API}&page=1`;
const Upcoming_Movie = `${Base_URL}upcoming?${API}&page=1`;
const Poster_URL = `https://image.tmdb.org/t/p/w500/`;
const Trending_All_URL = `https://api.themoviedb.org/3/trending/all/day?${API}`;
const Popular_TV_Shows = `https://api.themoviedb.org/3/tv/popular?${API}&language=en-US&page=1`;
const Popular = `https://api.themoviedb.org/3/person/popular?${API}&language=en-US&page=1`;
const Trending = `https://api.themoviedb.org/3/trending/all/day?${API}`;



// RATING COLOR
function voteRating(rates) {

    if (rates <= "10" && rates >= "8") {
        return 'green';
    }else if ( rates <= "7.9" && rates >= "6") {
        return 'orange'
    }else if (rates <= "5.9" && rates >="4" ){
        return 'blue'
    }else {
        return 'red'
    }
}

// POPULAR TV SHOWS
getPopularTVshow(Popular_TV_Shows)

function getPopularTVshow(url){
    fetch(url)
    .then((res) => res.json())
    .then((data)=> {
        let popularTVshow = data.results

        let output = '';

        popularTVshow.forEach(shows => {
            const TVshow_Poster = shows.poster_path;
            let rate = shows.vote_average;



            output += `
            <div class="movieBx">
                <a onclick="tvShowSelected('${shows.id}')" class="movie_container" href="#">
                    <img src="${Poster_URL + TVshow_Poster}">
                </a>
                <div class="info"> 
                    <div class="name">${shows.original_name}</div>
                   <div class="rating" style="color:${voteRating(rate)}">${rate}</div>
                </div>
            </div>
            `;
        });
        document.getElementById("popularTVshow").innerHTML = output;
    })
}
        
       
// POPULAR MOVIES
getPopularMovie(Popular_Movie)

function getPopularMovie(url){
    fetch(url)
    .then((res) => res.json())
    .then((data)=> {
        let popularMovie = data.results;
        
        let output = '';
        
        popularMovie.forEach(movies => {
            const Movie_Poster = movies.poster_path;
            let rate = movies.vote_average;

            output += `
            <div class="movieBx">
                <a onclick="popularMovieSelected('${movies.id}')" class="movie_container" href="#">
                    <img src="${Poster_URL + Movie_Poster}">
                </a>
                <div class="info"> 
                    <div class="name">${movies.original_title}</div>
                    <div class="rating" style="color:${voteRating(rate)}">${rate}</div>
                </div>
            </div>`;
        });

        document.getElementById("popularMovie").innerHTML = output;
    })
}



// POPULAR ACTORS
getPopular(Popular)

function getPopular(url){
    fetch(url)
    .then((res) => res.json())
    .then((data)=> {
        let popular = data.results;
        
        let output = '';
        
        popular.forEach(populars => {
            const Profile = populars.profile_path;

            output += `
            <div class="movieBx">
                <a onclick="popularSelected('${populars.id}')" class="movie_container" href="#">
                    <img src="${Poster_URL + Profile}">
                </a>
                <div class="popular__names">${populars.name}</div>
            </div>`;
        });
        document.getElementById("popular").innerHTML = output;
    })
}



// TRENDING
getTrending(Trending)

function getTrending(url){
    fetch(url)
    .then((res) => res.json())
    .then((data)=> {
    let trending = data.results;

    let output = '';

    trending.forEach(trendings => {
        const Trending_Poster = trendings.poster_path;
        let rate = trendings.vote_average;
        
        output += `
        <div class="movieBx">
            <a onclick="trendingSelected('${trendings.id}')" class="movie_container" href="#">
                <img src="${Poster_URL + Trending_Poster}">
            </a>
            <div class="info"> 
                <div class="name">${trendings.original_title}</div>
                <div class="rating" style="color:${voteRating(rate)}">${rate}</div>
            </div>
        </div>`;
    });
        document.getElementById("trending").innerHTML = output;
    })
}







// STORAGE  => TV SHOW ID
function tvShowSelected(id){
    sessionStorage.setItem('populartvShowID', id);
    window.location = 'TVshow.html';
    return false;
}


// STORAGE  => POPULAR MOVIES ID
function popularMovieSelected(id){
    sessionStorage.setItem('popularMovieID', id);
    window.location = 'movie.html';
    return false;
}

// STORAGE  => POPULAR ACTORS ID
function popularSelected(id){
    sessionStorage.setItem('popularID', id);
    window.location = 'popular.html';
    return false;
}

// STORAGE  => TRENDING ID
function trendingSelected(id){
    sessionStorage.setItem('trendingID', id);
    window.location = 'trending.html';
    return false;
}






// LOGIN
function login(){
	let field = document.getElementById("email");

	field.addEventListener("change", () => {
        localStorage.setItem("userName", field.value);
	});
    
    if (localStorage.getItem("userName")) {
        document.querySelector(".login__btn").style.display = "none";
        document.querySelector('.user__name').innerText = localStorage.getItem("userName");  
    }
}
login();


function toggle(){
    var LoginOpen = document.querySelector(".login__container");
    LoginOpen.classList.toggle("active");
}

function openToggle(){
    var logoutOpen = document.querySelector(".user__container");
    logoutOpen.classList.toggle("active")
}


function logout(){
    localStorage.removeItem("userName");
    document.querySelector(".login__btn").style.display = "block";
    document.querySelector(".user__name").style.display = "none";
    document.querySelector(".user__container").style.display = "none";
}


var loginFormSubmit = document.getElementById("loginFormSubmit");
loginFormSubmit.addEventListener("submit", (e)=> {
    e.preventDefault();

    var LoginOpen = document.querySelector(".login__container");
    LoginOpen.classList.toggle("active")

    location.reload();
    document.querySelector(".user__name").style.display = "block";
})

    

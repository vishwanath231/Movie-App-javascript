
let movieId = sessionStorage.getItem('searchResultID');

fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=dda54285`)
.then((res)=> res.json())
.then((response) => {

    let movie = response;

    let output =`
        <h2 class="header__title">${movie.Title}</h2>
        <div class="flex">
            <div class="poster">
                <img src="${movie.Poster}" style="width:180px; height:260px;" class="thumbnail">
            </div>
            <div class="details">
                <ul class="list">
                    <li class="item"><strong>Name:</strong> ${movie.Title}</li>
                    <li class="item"><strong>Genre:</strong> ${movie.Genre}</li>
                    <li class="item"><strong>Released:</strong> ${movie.Released}</li>
                    <li class="item"><strong>Rated:</strong> ${movie.Rated}</li>
                    <li class="item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                    <li class="item"><strong>Director:</strong> ${movie.Director}</li>
                    <li class="item"><strong>Actors:</strong> ${movie.Actors}</li>
                </ul>
            </div>
        </div>
        <div class="box">
            <h2>Plot</h2>
            <p>${movie.Plot}</p>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn">View IMDB</a>
            <a href="index.html" class="btn">Go Back To Search</a>
        </div>
    `;
    document.getElementById("movies").innerHTML = output;
})
.catch((err) => {
    console.log(err);
});



    
    

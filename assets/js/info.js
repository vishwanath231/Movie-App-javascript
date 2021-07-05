
let movieId = sessionStorage.getItem('searchResultID');



const API = 'api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a';
const Movie_Details_URL = `https://api.themoviedb.org/3/movie/${movieId}?${API}`;
const Movie_Video = `https://api.themoviedb.org/3/movie/${movieId}/videos?${API}`;
const Moive_Poster_URL = `https://image.tmdb.org/t/p/w500/`;

getMovieDetails(Movie_Details_URL);

function getMovieDetails(data){
    fetch(data)
    .then((res) => res.json())
    .then((datas) => {

        let movie = datas;

        let genres =  movie.genres;
        let genresoutput = '' ;
        genres.forEach(names => {
            genresoutput += `<span>${names.name}&nbsp;&nbsp;&nbsp;</span>` 
        })

            let language =  movie.spoken_languages;
        let languageoutput = '' ;
        language.forEach(names => {
            languageoutput += `<span>${names.name}&nbsp;&nbsp;&nbsp;</span>` 
        })


        let output =`
            <h2 class="header__title">${movie.original_title}</h2>
            <div class="flex">
                <div class="poster">
                    <img src="${Moive_Poster_URL + movie.backdrop_path}" class="thumbnail">
                </div>
                <div class="details">
                    <ul class="list">
                        <li class="item"><strong>Name : </strong> ${movie.original_title}</li>
                        <li class="item"><strong>Genre : </strong> ${genresoutput}</li>
                        <li class="item"><strong>Released : </strong> ${movie.release_date}</li>
                        <li class="item"><strong>Rated : </strong> ${movie.vote_average}</li>
                        <li class="item"><strong>Language : </strong> ${languageoutput}</li>
                        <li class="item"><strong>Run Time : </strong> ${movie.runtime}</li>
                    </ul>
                </div>
            </div>
            <div class="box">
                <h2>Overview : </h2>
                <p>${movie.overview}</p>
                <a href="http://imdb.com/title/${movie.imdb_id}" target="_blank" class="btn">View IMDB</a>&nbsp;&nbsp;
                <a href="index.html" class="btn">Go Back To Search</a>
            </div>
        `;
        document.querySelector(".video_title").innerHTML = "VIDEO";
        document.getElementById("movies").innerHTML = output;
    })

}
    
getMovieVideo(Movie_Video);

function getMovieVideo(data){
    fetch(data)
    .then((res) => res.json())
    .then((datas) => {
        let result = datas.results;

        let output = '';
        result.forEach(data => {
            let key = data.key;
            let title = data.title;

            output += `
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        });
        document.getElementById("movie__video").innerHTML = output;
    })
}
    


    



    

// fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=dda54285`)
// .then((res)=> res.json())
// .then((response) => {

//     let movie = response;

//     let output =`
//         <h2 class="header__title">${movie.original_title}</h2>
//         <div class="flex">
//             <div class="poster">
//                 <img src="${movie.Poster}" style="width:180px; height:260px;" class="thumbnail">
//             </div>
//             <div class="details">
//                 <ul class="list">
//                     <li class="item"><strong>Name:</strong> ${movie.Title}</li>
//                     <li class="item"><strong>Genre:</strong> ${movie.Genre}</li>
//                     <li class="item"><strong>Released:</strong> ${movie.Released}</li>
//                     <li class="item"><strong>Rated:</strong> ${movie.Rated}</li>
//                     <li class="item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
//                     <li class="item"><strong>Director:</strong> ${movie.Director}</li>
//                     <li class="item"><strong>Actors:</strong> ${movie.Actors}</li>
//                 </ul>
//             </div>
//         </div>
//         <div class="box">
//             <h2>Plot</h2>
//             <p>${movie.Plot}</p>
//             <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn">View IMDB</a>
//             <a href="index.html" class="btn">Go Back To Search</a>
//         </div>
//     `;
//     document.getElementById("movies").innerHTML = output;
// })
// .catch((err) => {
//     console.log(err);
// });



    
    

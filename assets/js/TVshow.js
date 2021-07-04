
let tvShowId = sessionStorage.getItem('populartvShowID');

const API = 'api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a';
const TVshow_Details_URL = `https://api.themoviedb.org/3/tv/${tvShowId}?${API}&language=en-US`;
const TVshow_Video = `https://api.themoviedb.org/3/tv/${tvShowId}/videos?${API}&language=en-US`;
const Moive_Poster_URL = `https://image.tmdb.org/t/p/w500/`;

getTVshowDetails(TVshow_Details_URL)
function getTVshowDetails(data){
    fetch(data)
    .then((res) => res.json())
    .then((datas) => {

        let movie = datas;

        let genres =  datas.genres;
        let genresoutput = '' ;
        genres.forEach(names => {
            genresoutput += `<span>${names.name}&nbsp;&nbsp;&nbsp;</span>` 
        })

        let language =  datas.spoken_languages;
        let languageoutput = '' ;
        language.forEach(names => {
            languageoutput += `<span>${names.name}&nbsp;&nbsp;&nbsp;</span>` 
        })
        let network =  datas.networks;
        let networkoutput = '' ;
        network.forEach(names => {
            networkoutput += `<span>${names.name}&nbsp;&nbsp;&nbsp;</span>` 
        })

        let output =`
            <h2 class="header__title">${movie.original_name}</h2>
            <div class="flex">
                <div class="poster">
                    <img src="${Moive_Poster_URL + movie.backdrop_path}" >
                </div>
                <div class="details">
                    <ul class="list">
                        <li class="item"><strong>Name:</strong> ${movie.original_name}</li>
                        <li class="item"><strong>Genre:</strong> ${genresoutput}</li>
                        <li class="item"><strong>Rated:</strong> ${movie.vote_average}</li>
                        <li class="item"><strong>Episode:</strong> ${movie.number_of_episodes}</li>
                        <li class="item"><strong>Season:</strong> ${movie.number_of_seasons}</li>
                        <li class="item"><strong>Language:</strong> ${languageoutput}</li>
                        <li class="item"><strong>Networks:</strong> ${networkoutput}</li>
                    </ul>
                </div>
            </div>
            <div class="box">
                <h2>Overview</h2>
                <p>${movie.overview}</p>
                <a href="index.html" style="background:green;" class="btn">Go Back To Search</a>
                <div class="season_title">Season</div>
            </div>
        `;

        let seasons =  datas.seasons;
        
        let outputt = '';
        seasons.forEach(names => {
            var season_Poster = names;
            outputt += `
                <div class="season_container">
                    <img src="${Moive_Poster_URL + season_Poster.poster_path}" alt=""  />
                    <p>${season_Poster.name}</p>
                </div>
            `;
        });
        document.getElementById("popularTVshow").innerHTML = output;
        document.getElementById("episode").innerHTML = outputt;
    })

}




getTVshowVideo(TVshow_Video);

function getTVshowVideo(data){
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

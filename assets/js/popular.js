let popularID = sessionStorage.getItem('popularID');

const API = 'api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a';
const Popular_URL = `https://api.themoviedb.org/3/person/${popularID}?${API}&language=en-US`;
const Poster_URL = `https://image.tmdb.org/t/p/w500/`;

getMovieDetails(Popular_URL)
    function getMovieDetails(data){
        fetch(data)
        .then((res) => res.json())
        .then((datas) => {

            let populars = datas;

            let output =`
                <div class="flex">
                    <div class="poster">
                        <img src="${Poster_URL + populars.profile_path}" style="width:200px; height:270px" class="thumbnail">
                    </div>
                    <div class="details">
                        <h2 style="color:#fff;margin-bottom:1rem;">${populars.name}</h2>
                        <ul class="list">
                            <li class="item"><strong>Birthday : </strong> ${populars.birthday}</li>
                            <li class="item"><strong>Place of Birth : </strong> ${populars.place_of_birth}</li>
                            <li class="item"><strong>Biography : </strong> ${populars.biography}</li>
                        </ul>
                    </div>
                </div><br>
                <div class="box">
                    <a href="index.html" style="background:rgb(62, 190, 62);" class="btn">Go Back To Search</a>
                </div>
            `;
             
        document.getElementById("popular").innerHTML = output;
    })

}
    


    



    
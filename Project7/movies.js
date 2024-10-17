const input = document.getElementById('input')
const search = document.getElementById('search')
const srcimage= document.getElementById('srcimage')
const darkwhite = document.getElementById('dw')
const err = document.getElementById('error')
const moviecontainer = document.getElementById('moviecontainer')

darkwhite.addEventListener('click', function(){
    
    document.body.classList.toggle('dark-mode');
    
        
})
async function movieapi(mov){
    const result = await fetch(`https://www.omdbapi.com/?s=${mov}&apikey=a6040b08&`);
    return await result.json();
}

search.addEventListener('click', async ()=>{
    const value = input.value;

    if(!value){
        err.innerText="Please Enter movie name please!";
        return;
    }
    try{
        const moviecard = await movieapi(value);
        
        moviecontainer.innerText=' ';

        moviecard.Search.forEach(movie => {

            const moviefigure = document.createElement('figure');
            moviefigure.classList.add('poster');

            const moviePoster = document.createElement('img')
            moviePoster.src = moviePoster !== "N/A" ? movie.Poster : movie.jpeg;
            moviePoster.alt = movie.Title;
            moviefigure.appendChild(moviePoster);

            const movieTitle = document.createElement('h3')
            movieTitle.innerText = movie.Title;
            moviefigure.appendChild(movieTitle);

            const movieYear = document.createElement('h4')
            movieYear.innerText = movie.Year;
            moviefigure.appendChild(movieYear);

            const movieType = document.createElement('h4')
            movieType.innerText = movie.Type;
            moviefigure.appendChild(movieType);

            moviecontainer.appendChild(moviefigure);
        });
        // const movie = moviecard.Search[0];

        // title.innerText = movie.Title;
        //     year.innerText = movie.Year;
        //     type.innerText = movie.Type;
        // srcimage.src = movie.Poster;
        
        }
    // }
    catch (error){
        err.innerText="Error occured!";

    }
});
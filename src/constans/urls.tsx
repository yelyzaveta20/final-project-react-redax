const baseURL='https://api.themoviedb.org/3'
const movie ='/discover/movie'
const genre='/genre/movie/list'
const moviedetails='/movie'
const poster='https://image.tmdb.org/t/p/w500'
const serch='https://api.themoviedb.org/3/search/movie'
// ?with_genres=27
const urls={
    movie:{
        base:movie,
        withGenser:(idGenre:number)=>`${movie}?with_genres=${idGenre}`,
        moviedetais:(idMovie:number)=>`${moviedetails}/${idMovie}`
    },
    genre:{
        base:genre
    },
    serch:{
        base:serch,
        sercheByserch:(query:string)=>`${serch}?query=${query}`
    }
}

export {baseURL, urls,poster}
import {IGenre} from "./genreInterface";

export interface IMovie {
    id:number,
    original_title:string,
    overview:string,
    poster_path:string,
    title:string,
    vote_average:number,
    genre_ids:number[]
}
export interface IMovies{
    page:string,
    results:IMovie[],
    total_pages:number,
    total_results:number
}
export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
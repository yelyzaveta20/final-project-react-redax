import {IMovies} from "../interface";
import {apiService} from "./apiService";
import {urls} from "../constans";
import {IRes} from "../types";

const movieServise={
    getAll:(page:string | null):IRes<IMovies>=>apiService.get(urls.movie.base, {params:{page}})
}
export {movieServise}
import {IRes} from "../types";
import {IGenre, IGenres} from "../interface";
import {apiService} from "./apiService";
import {urls} from "../constans";

const genreService={
    getAll:():IRes<IGenres>=>apiService.get(urls.genre.base)
}
export {genreService}
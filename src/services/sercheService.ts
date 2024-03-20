import {IRes} from "../types";
import {IMovies} from "../interface";
import {apiService} from "./apiService";
import {urls} from "../constans";

const sercheService={
    getQuery:(query:string, page:string|null):IRes<IMovies>=>apiService.get(urls.serch.sercheByserch(query), {params:{page}})
}
export {sercheService}
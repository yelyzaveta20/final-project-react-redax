import {IMovie} from "../../interface";
import {FC} from "react";
import {poster} from "../../constans";
import css from './Movies.module.css'
interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {original_title, poster_path}=movie
    const posterurl=`${poster}${poster_path}`
    return (
        <div className={css.gropMovie}>
            <img src={posterurl} alt={original_title}/>
            <h2>{original_title}</h2>
        </div>
    );
};

export {Movie};
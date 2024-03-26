import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovie} from "../../interface";
import {poster} from "../../constans";
import {useAppSelector} from "../../hooks";
import css from './Movies.module.css'
interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path, vote_average} = movie;
    const {theme} = useAppSelector(state => state.theme);
    const posterurl = poster_path ? `${poster}${poster_path}` : 'https://via.placeholder.com/300?text=None+Poster';
    let navigate = useNavigate();

    const handle = () => {
        navigate(`/moviedetails/${id}`);
    }

    return (
        <div className={css.gropMovie} onClick={handle}>

            <img src={posterurl} alt={original_title}/>

            <h3 className={theme ? css.light : css.dark}>{original_title}</h3>

            <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly/>

        </div>
    );
};

export {Movie};
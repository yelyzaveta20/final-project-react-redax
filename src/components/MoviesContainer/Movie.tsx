import {IMovie} from "../../interface";
import {FC} from "react";
import {poster} from "../../constans";
import css from './Movies.module.css'
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";
interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {id,original_title, poster_path, vote_average}=movie
    const posterurl=`${poster}${poster_path}`
    let navigate = useNavigate();
    const handle = () => {
        navigate(`/moviedetails/${id}`)
    }
    return (
        <div className={css.gropMovie} onClick={handle}>
            {poster_path?(
                <img src={posterurl} alt={original_title}/>
            ): (
                <img src={`https://th.bing.com/th?id=OIF.s1S%2fxuarov%2fLtVlIpIFzaQ&rs=1&pid=ImgDetMain`} alt='none'/>
            )}

            <h2>{original_title}</h2>

            <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly/>

        </div>
    );
};

export {Movie};
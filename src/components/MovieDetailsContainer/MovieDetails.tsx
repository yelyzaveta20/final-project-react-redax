import {useAppSelector} from "../../hooks";
import {FC} from "react";
import {IMovieDetails} from "../../interface";
import {useNavigate} from "react-router-dom";
import {poster} from "../../constans";
import {Badge, Rating} from "@mui/material";
import css from './MovieDetails.module.css'

interface IProps {
    movieDetails:IMovieDetails
}
const MovieDetails:FC<IProps>= ({movieDetails}) => {
    const {theme}=useAppSelector(state => state.theme)
    const navigate = useNavigate();
    const {
        original_language,
        original_title,
        title,
        release_date,
        popularity,
        vote_average,
        overview,poster_path,
        genres
    } = movieDetails;
    const posterurl = poster_path ? `${poster}${poster_path}` : 'https://via.placeholder.com/300?text=None+Poster';


    return (
        <div className={`${css.Detauls}  `}>
            <h2
            className={`${css.titleLider} ${theme ? css.light : css.dark}`}>{title}</h2>
            <div className={css.lider}>
                <div className={css.imgMovie}>

                        <img className={css.imgDetails} src={posterurl} alt={title}/>

                </div>

                <div className={`${css.informationMovie}`}>
                    <div className={theme ? css.light : css.dark}>Original title: {original_title}</div>
                    <div className={theme ? css.light : css.dark}>Original language: {original_language}</div>
                    <div className={theme ? css.light : css.dark}>Release date: {release_date}</div>
                    <div className={theme ? css.light : css.dark}>Popularity: {popularity}</div>
                    <div className={theme ? css.light : css.dark}>Vote average:</div>
                    <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5}
                            max={10.0} readOnly/>
                    <div className={theme ? css.light : css.dark}>Overview:</div>
                    <div className={theme ? css.light : css.dark}> {overview}</div>
                    <br/>

                    <div className={theme ? css.light : css.dark}>Genres:</div>
                    <div className={`${css.mainGenre} ${theme ? css.light : css.dark}`}>
                        {genres.map((genre) => (
                            <Badge key={genre.id} badgeContent={genre.id} color="secondary">
                                <button className={`${theme ? css.light : css.dark}   ${css.buttonGenre}`}
                                        onClick={() => navigate(`/genre/moviesgenres/${genre.id}`)}>
                                    {genre.name}
                                </button>
                            </Badge>
                        ))}
                    </div>

                </div>


            </div>
        </div>);
};

export {MovieDetails};
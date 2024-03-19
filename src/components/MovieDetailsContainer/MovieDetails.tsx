import {useAppSelector} from "../../hooks";
import {FC} from "react";
import {IMovieDetails} from "../../interface";
import {useNavigate} from "react-router-dom";
import {poster} from "../../constans";
import {Badge, Rating} from "@mui/material";

interface IProps {
    movieDetails:IMovieDetails
}
const MovieDetails:FC<IProps>= ({movieDetails}) => {
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
    const posterurl=`${poster}${poster_path}`


    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <div>
                {poster_path?(
                    <img src={posterurl} alt={original_title}/>
                ): (
                    <img src={`https://th.bing.com/th?id=OIF.s1S%2fxuarov%2fLtVlIpIFzaQ&rs=1&pid=ImgDetMain`} alt='none'/>
                )}
                <div>
                    <div>Original title: {original_title}</div>
                    <div>Original language: {original_language}</div>
                    <div>Release date: {release_date}</div>
                    <div>Popularity: {popularity}</div>
                    <div>Vote average:</div>
                    <Rating name="customized-10" defaultValue={vote_average} precision={0.5}
                            max={10.0}
                            readOnly/>
                    <div>Overview:</div>
                    <div> {overview}</div>
                    <br/>

                    Genres:
                    <div>
                        {genres.map(genre => (
                            <Badge badgeContent={genre.id} color="secondary">
                                <button
                                    key={genre.id}
                                    // onClick={() => navigate(`/genres/moviesgeeneres/${genre.id}`)}
                                >{genre.name}
                                </button>
                            </Badge>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export {MovieDetails};
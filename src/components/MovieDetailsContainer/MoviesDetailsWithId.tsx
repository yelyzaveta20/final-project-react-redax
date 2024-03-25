import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {MovieDetails} from "./MovieDetails";
import {movieActions} from "../../redux";
import css from "./MovieDetails.module.css";

const MoviesDetailsWithId = () => {
    const dispatch = useAppDispatch();
    const {movieDetails} = useAppSelector(state => state.movies);
    const {theme}=useAppSelector(state => state.theme)
    const {pathname} =useLocation()
    const navigate = useNavigate();
    const id=pathname.split('/')[pathname.split('/').length-1]
    useEffect(() => {
        if (id){
            dispatch(movieActions.getDetails(+id))
        }

    }, [id]);

    return (
        <div>
            <button className={theme ? css.light : css.dark}
                    onClick={() => navigate(-1)}>Back
            </button>
            {movieDetails &&
                <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MoviesDetailsWithId};
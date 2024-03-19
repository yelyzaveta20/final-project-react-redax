import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {MovieDetails} from "./MovieDetails";
import {movieActions} from "../../redux";

const MoviesDetailsWithId = () => {
    const dispatch = useAppDispatch();
    const {movieDetails} = useAppSelector(state => state.movies);
    const {pathname} =useLocation()
    const id=pathname.split('/')[pathname.split('/').length-1]
    useEffect(() => {
        if (id){
            dispatch(movieActions.getDetails(+id))
        }

    }, [id]);

    return (
        <div>
            {movieDetails&&
            <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MoviesDetailsWithId};
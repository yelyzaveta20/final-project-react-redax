import {useAppDispatch, useAppSelector} from "../../hooks";
import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {GenreOfMovie} from "./GenreOfMovie";


const GenresOfMoviesList = () => {
    const {moviesGenres, page}=useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const {pathname} =useLocation()
    const id=pathname.split('/')[pathname.split('/').length-1]
    const [query] = useSearchParams({page:'1'})
    const pageCurrent = query.get('page');
    console.log(id)
    useEffect(() => {
            dispatch(movieActions.getMovieOfGenres(+id))

    }, [id]);

    return (
        <div>
            {moviesGenres.map(movieGenre=><GenreOfMovie key={movieGenre.id} movieGenre={movieGenre}/>)}
        </div>
    );
};

export {GenresOfMoviesList};
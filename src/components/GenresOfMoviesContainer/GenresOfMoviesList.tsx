import {useAppDispatch, useAppSelector} from "../../hooks";
import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {GenreOfMovie} from "./GenreOfMovie";
import {Paginations} from "../PaginationsContainer";

const GenresOfMoviesList = () => {
    const { movies } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const {pathname} =useLocation()
    const id=pathname.split('/')[pathname.split('/').length-1]

    const [query] = useSearchParams({ page: '1' });
    const page = query.get('page');

    useEffect(() => {
        if (id){
            dispatch(movieActions.getMovieOfGenres({ id: +id, page }));
        }

    }, [id, page]);

    return (
        <div>
            {movies&&movies.map(movieGenre=><GenreOfMovie key={movieGenre.id} movieGenre={movieGenre}/>)}
            {movies && <div >
                <Paginations/>
            </div>}
        </div>
    );
};

export {GenresOfMoviesList};
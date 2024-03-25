import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Paginations} from "../PaginationsContainer";
import {Movie} from "../MoviesContainer";
import css from './MoviesGenres.module.css'

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
            <div className={css.GenreMovie}>

                {movies&&movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            </div>
            {movies && <div >
                <Paginations/>
            </div>}
        </div>
    );
};

export {GenresOfMoviesList};
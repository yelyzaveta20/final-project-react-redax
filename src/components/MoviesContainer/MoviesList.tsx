import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "./Movie";
import {Paginations} from "../PaginationsContainer";
import css from './Movies.module.css'

const MoviesList = () => {
    const {movies}=useAppSelector(state => state.movies)
    let dispatch = useAppDispatch();
    const [query] = useSearchParams({page:'1'})
    const page = query.get('page');
    useEffect(() => {
        dispatch(movieActions.getAllMovies(page))
    }, [page]);
    return (
        <div >
            <div className={css.Movie}>
                {
                    movies&&movies.map(movie=><Movie key={movie.id} movie={movie}/>)
                }

            </div>
            {movies && <div>
                <Paginations/>
            </div>}
        </div>
    );
};

export {MoviesList};
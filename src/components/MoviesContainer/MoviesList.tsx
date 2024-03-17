import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "./Movie";
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
        <div className={css.Movie}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};
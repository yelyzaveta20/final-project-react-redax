import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "./Movie";
import css from './Movies.module.css'
import {Paginations} from "../PaginationsContainer";
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
            {movies && <div >
                <Paginations/>
            </div>}
        </div>
    );
};

export {MoviesList};
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {ChangeEvent, useEffect} from "react";
import {sercheService} from "../../services";
import {sercheActions} from "../../redux";
import {Serche} from "./Serche";
import {poster} from "../../constans";

const Serches = () => {
    const { movieResults, movies } = useAppSelector(state => state.movies);
    // const { query, page, isFormActive } = useAppSelector(state => state.serche);
    const dispatch = useAppDispatch();
    const [queryParams] = useSearchParams({ query: '', page: '1' });
    const queryValue = queryParams.get('query') || '';
    const pageCurrent = queryParams.get('page');
    useEffect(() => {
        dispatch(sercheActions.getSerche({ query: queryValue, page: pageCurrent }));
    }, [queryValue, pageCurrent, dispatch]);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(sercheActions.setQuery(event.target.value));
    };

    const handleShowAll = () => {
        dispatch(sercheActions.getSerche({  query: queryValue, page: pageCurrent }));
        dispatch(sercheActions.setFormActive(true));
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={queryValue}
                    onChange={handleInputChange}
                    placeholder="Search movies..."
                />
                <button onClick={handleShowAll}>Show All</button>
            </form>
            <div>
                {movieResults?.map((movie) => (
                    <Serche key={movie.id} movie={movie} poster={poster} />
                ))}
            </div>
        </div>
    );
};

export {Serches};
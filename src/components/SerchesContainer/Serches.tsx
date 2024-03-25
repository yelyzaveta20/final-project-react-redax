import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {ChangeEvent, useEffect} from "react";
import {useForm} from "react-hook-form";
import {searchActions} from "../../redux";
import {Movie, MoviesList} from "../MoviesContainer";
import {PaginationsOnlySearch} from "../PaginationsContainer";
import css from './Serches.module.css'
const Serches = () => {
    const {searchWord} = useAppSelector(state => state.search)
    const {theme}=useAppSelector(state => state.theme)
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({query: '', page: '1'});
    const currentPage = query.get('page') ? query.get('page') : '1'
    const {reset, handleSubmit} = useForm()
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery({query: event.target.value, page: '1'});
    };

    useEffect(() => {
        dispatch(searchActions.getSearch({query: query.get('query'), page: currentPage}));
    }, [currentPage]);


    const search = async () => {
        dispatch(searchActions.getSearch({query: query.get('query'), page: currentPage}))
        reset()
    }
return (
    <div>
        <div className={css.formAndButton}>
            <form>
                <input className={theme? css.light :css.dark}
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Search movies..."
                />

            </form>
            <button className={`${css.ButtontoForm} ${theme? css.light :css.dark}`} onClick={handleSubmit(search)}>Show All</button>
        </div>

        <div className={css.Serche}>
            {searchWord && searchWord.map(movie => <Movie key={movie?.id} movie={movie}/>)}
            {/*{searchWord? searchWord.map(movie => <Movie key={movie?.id} movie={movie}/>):<MoviesList/>}*/}
    </div>
    <div>
        {searchWord && searchWord.length > 0 && <PaginationsOnlySearch/>}
    </div>
    </div>
);
};

export {Serches};
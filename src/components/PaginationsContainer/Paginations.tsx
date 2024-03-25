import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import css from './Paginations.module.css'

const Paginations = () => {
    const {page}=useAppSelector(state => state.movies)
    const [, setQuery] = useSearchParams({page: '1'});
    const {theme}=useAppSelector(state => state.theme)
    const next = () => {
        const nextPage = +page + 1;
        setQuery({ page: nextPage.toString() });
    }

    const prev = () => {
        if (+page > 1) {
            const prevPage = +page - 1;
            setQuery({ page: prevPage.toString() });
        }
    }
    return (
        <div className={css.paginationContainer}>
            <button className={theme? css.light :css.dark} disabled={!page || +page === 1} onClick={prev}>prev</button>
            <button className={theme? css.light :css.dark} disabled={!page || page.length === 0} onClick={next}>next</button>
        </div>
    );
};

export {Paginations};
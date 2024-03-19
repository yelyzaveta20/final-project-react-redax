import {useSearchParams} from "react-router-dom";
import css from './Paginations.module.css'
import {useAppSelector} from "../../hooks";
const Paginations = () => {
    const {page}=useAppSelector(state => state.movies)
    const [, setQuery] = useSearchParams({page: '1'});

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
            <button disabled={!page || +page === 1} onClick={prev}>prev</button>
            <button disabled={!page || page.length === 0} onClick={next}>next</button>
        </div>
    );
};

export {Paginations};
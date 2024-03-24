import {useSearchParams} from "react-router-dom";
import css from './Paginations.module.css'
const PaginationsOnlySearch = () => {
    const [query, setQuery] = useSearchParams({ query: '', page: '1' });
    const queryValue = query.get('query') || '';
    const pageCurrent = query.get('page');

    const next = () => {
        const nextPage = +pageCurrent + 1;
        setQuery({ query: queryValue, page: nextPage.toString() });
    }

    const prev = () => {
        if (+pageCurrent > 1) {
            const prevPage = +pageCurrent - 1;
            setQuery({ query: queryValue, page: prevPage.toString() });
        }
    }
    return (
        <div className={css.paginationContainer}>
            <button disabled={!pageCurrent || +pageCurrent === 1} onClick={prev}>prev</button>

            <button disabled={!pageCurrent || pageCurrent.length === 0} onClick={next}>next</button>
        </div>
    );
};

export {PaginationsOnlySearch};
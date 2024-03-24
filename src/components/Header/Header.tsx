import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {ThemeSwicher} from "../Swicher";

const Header = () => {
    return (
        <div className={css.Header}>
            <div>
                <NavLink className={css.textWihtLogo} to={'/movies'}>KING MOVIES

                    <img
                        className={`${css.logo} ${css.account}`}
                        alt={'Logo'}
                        src="data:image/png;base64,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"/>
                </NavLink>
            </div>

            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={'/genre'}>Genre</NavLink>
            <NavLink to={'/serche'}>Serche</NavLink>
            {/*<button className={css.toggleButton}>'Dark' : 'Light' </button>*/}
            <ThemeSwicher/>
            <img
                className={css.account}
                alt={'account'}
                src="data:image/png;base64,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"/>
        </div>
    )
        ;
};

export {Header};
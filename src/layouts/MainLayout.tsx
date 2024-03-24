import {Header} from "../components";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../hooks";
import css from './Mainlayout.module.css'
const MainLayout = () => {
    // const {theme}=useAppSelector(state => state.theme)
    return (
        <div
            // className={theme? css.light :css.dark}
        >
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
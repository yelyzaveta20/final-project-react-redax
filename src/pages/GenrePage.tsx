import {GenresList} from "../components/GenresContainer";
import {Outlet} from "react-router-dom";

const GenrePage = () => {
    return (
        <div>
           <GenresList/>
            <Outlet/>
        </div>
    );
};

export {GenrePage};
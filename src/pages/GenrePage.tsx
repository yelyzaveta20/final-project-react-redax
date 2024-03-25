import {GenresList} from "../components";

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
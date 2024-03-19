import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, MovieDetailsPages, MoviePage, SerchePage} from "./pages";

const router= createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviePage/>
            },
            {
                path:'moviedetails/:id', element:<MovieDetailsPages/>
            },
            {
                path:'genre', element:<GenrePage/>
            },
            {
                path:'serche', element:<SerchePage/>
            }
        ]
    }
])
export {router}
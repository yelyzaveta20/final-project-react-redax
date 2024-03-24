import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, GenresOfMoviesPage, MovieDetailsPages, MoviePage, SearchPage} from "./pages";


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
                path:'genre', element:<GenrePage/>, children:[
                    {
                        path:'moviesgenres/:id', element:<GenresOfMoviesPage/>
                    }
                ]
            },
            {
                path:'serche', element:<SearchPage/>
            }
        ]
    }
])
export {router}
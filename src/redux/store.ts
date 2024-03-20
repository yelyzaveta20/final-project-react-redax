import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer, sercheReducer} from "./slice";


const store=configureStore({
    reducer:{
        movies:movieReducer,
        // movieDetails:movieDetailsReducer
        genres:genreReducer,
        serche:sercheReducer
    }
})
export {store}
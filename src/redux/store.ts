import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, searchReducer, themeReducer,} from "./slice";


const store=configureStore({
    reducer:{
        movies:movieReducer,
        genres:genreReducer,
        search:searchReducer,
        theme:themeReducer
    }
})
export {store}
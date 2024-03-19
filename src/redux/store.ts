import {configureStore} from "@reduxjs/toolkit";
import { movieReducer} from "./slice";


const store=configureStore({
    reducer:{
        movies:movieReducer,
        // movieDetails:movieDetailsReducer
    }
})
export {store}
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovieDetails, IMovies} from "../../interface";
import {movieServise} from "../../services";


interface IState {
    movies:IMovie[]|null,
    page:string | null,
    movieDetails:IMovieDetails,
    id:number,
    moviesGenres:IMovie[],
    movieResults:IMovie[]
}
interface MovieOfGenresPayload {
    id: number;
    page: string | null;
}

const initialState:IState={
    movies:null,
    page:null,
    movieDetails:null,
    id:null,
    moviesGenres:[],
    movieResults:[]

};
const getAllMovies = createAsyncThunk<IMovies, string | null>(
    'movieSlice/getAllMovies',
    async (page, thunkAPI) => {
        try {
            const { data } = await movieServise.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

const getDetails=createAsyncThunk<IMovieDetails, number>(
    'movieSlice/getDetails',
    async (id,thunkAPI)=>{
        try {
            const {data}=await movieServise.detailsMovie(id)
            return data
        }catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

const getMovieOfGenres = createAsyncThunk<IMovies,MovieOfGenresPayload >(
    'movieSlice/getMovieOfGenres',
    async ({id, page}, thunkAPI) => {
        try {
            const { data } = await movieServise.withGenserId(id, page);
            return data;

        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

const movieSlice= createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder

            // .addCase(getAllMovies.fulfilled, (state, action)=>{
            //     // state.movies=action.payload.results
            //     const {page, results} = action.payload;
            //     state.page=page
            //     state.movies = results
            // })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.movieDetails=action.payload
            })
            // .addCase(getMovieOfGenres.fulfilled, (state, action) => { // <-- only one argument provided
            //     state.moviesGenres = action.payload.results;
            //
            // })
            .addMatcher(isFulfilled(getAllMovies, getMovieOfGenres), (state, action) => {
                const {page, results} = action.payload;

                state.movies = results
                state.page=page
        })
})
const {reducer:movieReducer, actions}=movieSlice
const movieActions ={
    ...actions,
    getAllMovies,
    getDetails,
    getMovieOfGenres
}
export {movieActions, movieReducer}
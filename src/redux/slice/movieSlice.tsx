import {IMovie, IMovieDetails, IMovies} from "../../interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServise} from "../../services";
import {AxiosError} from "axios";



interface IState {
    movies:IMovie[],
    page:string | null,
    movieDetails:IMovieDetails,
    id:number
}
const initialState:IState={
    movies:[],
    page:null,
    movieDetails:null,
    id:null

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

const movieSlice= createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action)=>{
                // state.movies=action.payload.results
                const {page, results} = action.payload;
                state.page=page
                state.movies = results
            })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.movieDetails=action.payload
            })
})
const {reducer:movieReducer, actions}=movieSlice
const movieActions ={
    ...actions,
    getAllMovies,
    getDetails
}
export {movieActions, movieReducer}
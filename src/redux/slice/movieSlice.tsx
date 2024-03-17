import {IMovie, IMovies} from "../../interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServise} from "../../services";
import {AxiosError} from "axios";



interface IState {
    movies:IMovie[],
    page:string | null
}
const initialState:IState={
    movies:[],
    page:null

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

const movieSlice= createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action)=>{
                state.movies=action.payload.results
            })
})
const {reducer:movieReducer, actions}=movieSlice
const movieActions ={
    ...actions,
    getAllMovies
}
export {movieActions, movieReducer}
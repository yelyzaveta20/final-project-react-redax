import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenres} from "../../interface";
import {AxiosError} from "axios";
import {genreService} from "../../services";

interface IState {
    genres:IGenre[]
}

const initialState:IState={
    genres:[]
};

const getAllGenres=createAsyncThunk<IGenres, void>(
    'genreSlice/getAllGenres',
    async (_, thunkAPI)=>{
        try {
            const {data}=await genreService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

const genreSlice=createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action)=>{
                state.genres=action.payload.genres
            })
})
const {reducer:genreReducer, actions}=genreSlice
const genreActions={
    ...actions,
    getAllGenres
}
export {
    genreActions,
    genreReducer
}
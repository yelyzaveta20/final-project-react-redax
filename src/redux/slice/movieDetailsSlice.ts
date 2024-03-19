import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {IMovieDetails, IMovies} from "../../interface";
// import {AxiosError} from "axios";
// import {apiService, movieServise} from "../../services";
// interface IState {
//     movieDetails:IMovieDetails,
//     id:number
// }
// const initialState:IState={
//     movieDetails:null,
//     id:null
// }
// const getDetails=createAsyncThunk<IMovieDetails, number>(
//     'movieDetailsSlice/getDetails',
//     async (id,thunkAPI)=>{
//         try {
//             const {data}=await movieServise.detailsMovie(id)
//             return data
//         }catch (e) {
//             const err = e as AxiosError;
//             return thunkAPI.rejectWithValue(err.response.data);
//         }
//     }
// )
//
// const movieDetailsSlice=createSlice({
//     name:'movieDetailsSlice',
//     initialState,
//     reducers:{},
//     extraReducers:builder =>
//         builder
//             .addCase(getDetails.fulfilled, (state, action) => {
//                 state.movieDetails=action.payload
//             })
//
// }
// )
// const {reducer:movieDetailsReducer, actions}=movieDetailsSlice
//
// const movieDetailsActions={
//     ...actions,
//     getDetails
// }
// export {
//     movieDetailsActions,
//     movieDetailsReducer
// }
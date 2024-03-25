import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovies} from "../../interface";
import {sercheService} from "../../services";

interface IState {
    page:  string | null
    searchWord: IMovie[],
}

const initialState:IState = {
    page: null,
    searchWord: null,
}

const getSearch = createAsyncThunk<IMovies, { query: string, page: string | null }>(
    'searchSlice/getSearch',
    async ({query, page}, thunkAPI) => {
        try {
            const {data} = await sercheService.getQuery(query, page)
            return data
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getSearch.fulfilled, (state, action)=>{
                const {results, page} = action.payload
                state.searchWord = results
                state.page = page
            })
})

const {reducer: searchReducer, actions} = searchSlice

const searchActions = {
    ...actions,
    getSearch
}
export {
    searchReducer,
    searchActions
}
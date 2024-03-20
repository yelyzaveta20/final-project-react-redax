import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, ISerche, ISerches} from "../../interface";
import {AxiosError} from "axios";
import {sercheService} from "../../services";

interface ISercheState {
    query: IMovie[];
    page: string | null;
    isFormActive: boolean;
}

const initialState: ISercheState = {
    query: [],
    page: null,
    isFormActive: false,
};
export const getSerche = createAsyncThunk(
    'sercheSlice/getSerche',
    async ({ query, page }: { query: string; page: string | null }) => {
        try {
            const { data } = await sercheService.getQuery(query, page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            throw err.response.data;
        }
    }
);

const sercheSlice = createSlice({
    name: 'sercheSlice',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setFormActive(state, action) {
            state.isFormActive = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder.addCase(getSerche.fulfilled, (state, action) => {
            state.query = action.payload.results;
        }),
});
// const getSerche=createAsyncThunk<ISerches, any>(
//     'sercheSlice/getSerche',
//     async ({query,page}, thunkAPI)=>{
//         try {
//             const {data}=await sercheService.getQuery(query,page)
//         }catch (e) {
//             const err = e as AxiosError;
//             return thunkAPI.rejectWithValue(err.response.data);
//         }
//     }
// )
//
// const sercheSlice=createSlice({
//     name:'sercheSlice',
//     initialState,
//     reducers:{},
//     extraReducers:builder =>
//         builder
//             .addCase(getSerche.fulfilled, (state, action) => {
//                 state.query=action.payload.results
//             })
// })
const {reducer:sercheReducer, actions}=sercheSlice
const sercheActions={
    ...actions,
    getSerche
}
export {sercheActions, sercheReducer}
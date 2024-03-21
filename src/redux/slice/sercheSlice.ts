import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovie, ISerche, ISerches} from "../../interface";
import {AxiosError} from "axios";
import {sercheService} from "../../services";

interface ISercheState {
    query: IMovie[]; // Update the type here
    page: string | null;
    isFormActive: boolean;
}

const initialState: ISercheState = {
    query: [], // Initialize as an empty array
    page: null,
    isFormActive: false,
};

// Define the payload type for getSerche
interface GetSerchePayload {
    results: IMovie[]; // Assuming this is the correct payload structure
}

const getSerche = createAsyncThunk(
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
        // You might want to rename this action to setQueryResults for clarity
        setQuery(state, action) {
            state.query = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },

    },
    extraReducers: (builder) =>
        builder
            .addCase(getSerche.fulfilled, (state, action) => {
            state.query = action.payload.results;
        })
            .addMatcher(isFulfilled(getSerche), state => {
                state.isFormActive = true
            })
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
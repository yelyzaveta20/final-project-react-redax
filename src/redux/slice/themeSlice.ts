import {createSlice} from "@reduxjs/toolkit";

interface IState {
    theme:boolean
}

let initialState:IState={
    theme:false
};
const themeSlice=createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        changer:(state, action) => {
            state.theme=action.payload
        }
    }
})
const {reducer:themeReducer, actions}=themeSlice
const themeActions={
    ...actions
}
export {
    themeActions, themeReducer
}
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    state: false,
}

const assignment = createSlice({
    name: 'assignment',
    initialState: initialState,
    reducers:{
        removeHome: (state, action) =>{
            return {...state, state: action.payload.state}
        }
    }
})

export const {removeHome} = assignment.actions
export default assignment.reducer
import {createSlice} from '@reduxjs/toolkit'
import { number } from 'prop-types'

const seachSessionStorage = () => {
    if(!window.sessionStorage.getItem('state')){
        window.sessionStorage.setItem('state', "false")
        return true
    }else{
        const state = window.sessionStorage.getItem("state")
        if(state === 'false') return false
        if(state === 'true') return true
    }
}

const initialState = {
    state: seachSessionStorage(),
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
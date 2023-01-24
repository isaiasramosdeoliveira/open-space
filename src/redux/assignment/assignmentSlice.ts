import {createSlice} from '@reduxjs/toolkit'
import { number } from 'prop-types'

const seachSessionStorage: Function = (): boolean => {
    if(!window.sessionStorage.getItem('state')){
        window.sessionStorage.setItem('state', "false")
        return true
    }else{
        const state: string | null = window.sessionStorage.getItem("state")
        if(state === 'false') return false
        if(state === 'true') return true
    }
    return true
}

const initialState: Object = {
    state: seachSessionStorage(),
    display: false,
}

const assignment = createSlice({
    name: 'assignment',
    initialState: initialState,
    reducers:{
        removeHome: (state, action) =>{
            return {...state, state: action.payload.state}
        },
        menuExpand: (state, action) => {
            return {...state, display: action.payload.display}
        }
    }
})

export const {removeHome, menuExpand} = assignment.actions
export default assignment.reducer
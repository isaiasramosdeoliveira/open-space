import {createSlice} from '@reduxjs/toolkit'
import { number } from 'prop-types'
export const idRandom = (): number =>{
    return Math.random() * (1000 - 5) + 5;
}
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
const loadList = () =>{
    const database = [{}]
    if(!window.localStorage.getItem('assignment')){
        const databaseString = JSON.stringify(database)
        window.localStorage.setItem('assignment', databaseString)
        return 
    }else{
        const empty = [{}]
        const databaseString: any = window.localStorage.getItem("assignment")
        const databaseJSON = JSON.parse(databaseString);
        databaseJSON.shift()
        return databaseJSON
    }
    const databaseString: any = window.localStorage.getItem("assignment")
    const databaseJSON = JSON.parse(databaseString);
    return databaseJSON
}

const initialState: Object = {
    state: seachSessionStorage(),
    display: false,
    stateForm: false,
    warningForm: false,
    assignment:loadList(),
    assignmentsAll: [{}],
    assignmentToday: [{}],
    assignmentWeek: [{}],
    assignmeentMonth: [{}]
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
        },
        DisplayForm: (state, action) => {
            return {...state, stateForm: action.payload.stateForm}
        },
        setWarningForm: (state, action) => {
            return {...state, warningForm: action.payload.warningForm}
        },
        addAssignment : (state, action) =>{
            return {...state, assignments: action.payload.assignments}
        },
        addAssignmentAll : (state, action) =>{
            return {...state, assignmentsAll: action.payload.assignmentsAll}
        }
    }
})
export const {removeHome, menuExpand, DisplayForm, setWarningForm, addAssignment} = assignment.actions
export default assignment.reducer

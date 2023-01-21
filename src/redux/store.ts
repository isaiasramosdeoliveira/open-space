import { configureStore } from "@reduxjs/toolkit";
import assignment from './assignment/assignmentSlice'

const store = configureStore({
    reducer: assignment,
})
export default store;
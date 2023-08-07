import {configureStore} from '@reduxjs/toolkit'
import StudentReducer from './Reducers/StudentReducer'
export const store= configureStore({
    reducer:{StudentReducer},
})
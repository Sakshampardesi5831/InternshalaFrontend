import {configureStore} from '@reduxjs/toolkit'
import StudentReducer from './Reducers/StudentReducer'
import EmployeReducer from './Reducers/EmployeReducer'
export const store= configureStore({
    reducer:{StudentReducer,EmployeReducer},
})
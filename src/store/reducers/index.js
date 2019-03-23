import {combineReducers} from 'redux'
import studentReducer from './studentReducer'
import authReducer from './authReducer'

export default combineReducers({
    student: studentReducer,
    authStudent: authReducer
})
import {LOGIN_REQUEST,LOGIN_CHECK,LOGOUT} from './type'
import axios from 'axios'

export const loginCheck = () => async dispatch => {
    dispatch ({
        type: LOGIN_CHECK
    })
}

export const authLogout = () => async dispatch => {
    dispatch ({
        type: LOGOUT
    })
}

export const authLogin = (parameter) => async dispatch => {
   try {
    const cors = 'https://cors-anywhere.herokuapp.com/'

    const response = await axios.post(`${cors}https://node-student.herokuapp.com/api/student/signin`, parameter)            
    localStorage.setItem('token',response.data.token)
    dispatch({
        type:LOGIN_REQUEST,
        payload: response.data.token
    })
    return true;
   } catch (error) {
       alert("username or password wrong")
    return false;
   }
}
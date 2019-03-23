import {GET_STUDENTS} from './type'
import axios from 'axios'

export const getStudents = () => async dispatch => {
    const res = await axios.get('https//jsonplacehodler.typicode.com/users')
    dispatch({
        type:GET_STUDENTS,
        payload: res.data
    })
}


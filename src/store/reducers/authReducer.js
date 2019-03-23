import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT} from '../actions/type'

const initialState = {
    authStudent:     
            {   
                token:false,
                isAuth:false          
            }             
}

export default function(state = initialState, action) {
   switch (action.type) {
    case LOGIN_REQUEST:
        return {
            ...state,
            authStudent: {
                token: action.payload,
                isAuth: true
            }            
        };   
    case LOGIN_FAILURE:
        return {};
    case LOGOUT:
    return {
        ...state,
        authStudent: {
            token: false,
            isAuth: false
        }            
    };   
    default:
        return state
    }
}
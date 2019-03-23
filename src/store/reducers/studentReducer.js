import {GET_STUDENTS} from '../actions/type'

const initialState = {
    students: [        
            {
                id: 1,
                name : "Anoplay",
                email : "anoplay@gmail.com",
                phone : 877777777
            },
            {
                id: 2,
                name : "Yada",
                email : "Yada@gmail.com",
                phone : 877132213
            },
            {
                id: 3,
                name : "Sqwillerz",
                email : "Sqwillerz@gmail.com",
                phone : 877777777
            }          
    ]
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_STUDENTS:
            return{
                ...state                
            }
            default:
            return state
            
    }
}
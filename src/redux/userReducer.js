import {LOGIN, LOGOUT} from './types'

const initialState = {
    user: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {...state, user: action.payload}
        case LOGOUT:
            return initialState; 
        default:    
            return state;
    }
}
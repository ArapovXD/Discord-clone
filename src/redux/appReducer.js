import {SET_CHANNEL_INFO} from './types'

const initialState = {
    channelId: null,
    channelName: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_CHANNEL_INFO:
            return {...state, channelId: action.payload.id, channelName: action.payload.name}
        default:    
            return state;
    }
}
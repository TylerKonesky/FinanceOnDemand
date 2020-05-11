import {FETCH_FACTS} from '../actions/types';

export default function(state = null, action){
    switch(action.type){
        case FETCH_FACTS:
            return action.payload || false;
        
        default:
            return state; 
    }
}
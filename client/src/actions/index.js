import axios from 'axios';
import { FETCH_USER, FETCH_FACTS } from './types';

export const fetchUser = () => async dispatch =>{
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data})
}

export const fetchFacts = () => async dispatch =>{
    console.log("when does this happen?")
    const res = await axios.get('/api/facts/getAllFacts');
    dispatch({type: FETCH_FACTS, payload: res.data})
}
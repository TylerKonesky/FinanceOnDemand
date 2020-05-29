import axios from 'axios';
import { FETCH_USER, FETCH_FACTS, FETCH_ARTICLES, FETCH_POLLS } from './types';


export const fetchArticles = () => async dispatch =>{
    console.log('fetching all articles...');
    const res = await axios.get('/api/articles/getAllArticles');
    dispatch({type: FETCH_ARTICLES, payload: res.data})
}

export const fetchFacts = () => async dispatch =>{
    const res = await axios.get('/api/facts/getAllFacts');
    dispatch({type: FETCH_FACTS, payload: res.data})
}

export const fetchPolls = () => async dispatch => {
    const res = await axios.get('/api/polls/getAllPolls');
    dispatch({type: FETCH_POLLS, payload: res.data})
}

export const fetchUser = () => async dispatch =>{
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data})
}

export const updateUser = (obj) => async dispatch => {
    
    console.log("this is the actions", obj)
}
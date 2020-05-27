import {combineReducers} from 'redux';
import {reducer as reduxForm } from 'redux-form';
import userReducer from './userReducer';
import factsReducer from './factsReducer';
import pollReducer from './pollReducer';
import articleReducer from './articleReducer';

export default combineReducers({
    user: userReducer,
    facts: factsReducer,
    articles: articleReducer,
    polls: pollReducer,
    form: reduxForm
})
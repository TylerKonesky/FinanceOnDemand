import {combineReducers} from 'redux';
import {reducer as reduxForm } from 'redux-form';
import userReducer from './userReducer';
import factsReducer from './factsReducer';

export default combineReducers({
    user: userReducer,
    facts: factsReducer,
    form: reduxForm
})
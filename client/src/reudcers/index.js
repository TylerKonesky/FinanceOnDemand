import {combineReducers} from 'redux';
import {reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import factsReducer from './factsReducer';

export default combineReducers({
    auth: authReducer,
    facts: factsReducer,
    form: reduxForm
})
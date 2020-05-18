import React from 'react';
import {reduxForm, Field} from 'redux-form';
import ContactField from './ContactField';
import '../body.css';
import './Contact.css';

let ContactFields = props =>{
        const {handleSubmit} = props;
    
        return(
            <div className="container row body-size">
                <h3>Contact Us</h3>
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s4">
                        <Field type="text" component={ContactField} name='name' label='Name'></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                        <Field type="text" component={ContactField} name='email' label='Email'></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                        <Field type="text" component={ContactField} name='phone' label='Phone'></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <Field type="text" component={ContactField} name='comment' label='Comments'></Field>
                        </div>
                    </div>
                    <button type="submit" className="teal btn-flat right contact-button">
                        Send
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
}

export default reduxForm({
    form: 'contactForm'
})(ContactFields)
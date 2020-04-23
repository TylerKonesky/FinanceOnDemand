import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import ContactField from './ContactFields';



class Contact extends Component{
    render(){
        return(
            <div className=" container row">
                <h3>Contact Us</h3>
                <form className="col s12">
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
                    <button type="submit" className="teal btn-flat right white-text">
                        Submit
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'contactForm'
})(Contact)
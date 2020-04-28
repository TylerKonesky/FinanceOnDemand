import React, {Component} from 'react';
import ContactFields from './ContactFields';

class Contact extends Component{
    submit = values =>{
        console.log(values)
    }
    render(){
        return(
            <ContactFields onSubmit={this.submit}/>
        )
    }
}

export default Contact
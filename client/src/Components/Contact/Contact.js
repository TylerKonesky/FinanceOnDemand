import React, {Component} from 'react';
import ContactFields from './ContactFields';
import '../body.css';

class Contact extends Component{
    submit = values =>{
        console.log(values)
    }
    render(){
        return(
            <div className="body-size">
                <ContactFields onSubmit={this.submit}/>
            </div>
        )
    }
}

export default Contact
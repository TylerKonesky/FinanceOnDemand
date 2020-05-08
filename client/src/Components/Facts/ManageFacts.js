import React, {Component} from 'react';
import axios from 'axios';
import '../body.css';
import './ManageFacts.css'

class AddFact extends Component{
    constructor(props){
        super(props);

        this.state = {
            fact: '',
            imageURL: ''
        }
    }
    updateFact(value){
        this.setState({fact: value})
    }

    updateURL(value){
        this.setState({imageURL: value})
    }
   
    addNewFact(e){
        e.preventDefault();
        const newFact = {fact: this.state.fact, imageURL: this.state.imageURL}
        axios.post('/api/facts/newFact', newFact).then((res)=>{
            console.log(res)
        })
    }
    render(){
        return(
            <form className="container body-size facts-wrapper"> 
                <div className="input-wrapper">
                    <div>
                        <label>Fact</label>
                        <input onChange={(e)=>this.updateFact(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input onChange={(e)=>this.updateURL(e.target.value)}></input>
                    </div>

                </div>
               

                <div className="button-wrapper">
                    <button onClick={(e)=>this.addNewFact(e)} className="teal btn-flat right contact-button">
                            Submit
                            <i className="material-icons left">add</i>
                    </button>
                </div>

                
                
            </form>
        )
    }
}

export default AddFact
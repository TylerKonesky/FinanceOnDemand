import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
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
    renderAuthorizeUser(){
        switch(this.props.auth){
            case null:
                return <div>Loading...</div>
            default:
                if(this.props.auth.userType === 'admin'){
                    return(
                        <div>
                            <h3 className="fact-header">Add New Fact</h3>
                            <form className=""> 
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
                        </div>
                    )
                }else{
                    return(
                        <div>You are not authorized to view this page.</div>
                    )
                }
        }
    }
    render(){
        return(
            <div className="container body-size facts-wrapper">
                {this.renderAuthorizeUser()}
            </div>
            
        )
    }
}


function mapStateToProps({auth}){
    return {auth}
}

export default connect(mapStateToProps)(AddFact)
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchFacts } from '../../actions';
import '../body.css';
import './ManageFacts.css';
import './AdminHeader.css';

class AddFact extends Component{
    constructor(props){
        super(props);

        this.state = {
            fact: '',
            imageURL: ''
        }
    }
    componentDidMount(){
        this.props.fetchFacts();
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
            this.props.fetchFacts();
        })
        
    }
    deleteFact(e, id){
        e.preventDefault();
        axios.delete(`/api/facts/deleteFact/${id}`).then(res =>{
            console.log('fact deleted');
            this.props.fetchFacts();
        })
    }

    renderFacts(){
        if(this.props.facts === null || this.props.facts === false){
            return (
                <div> No data found</div>
            )
        }
        return this.props.facts.map(fact =>{
            return (
                <div className="row card-wrapper">
                    <div className=" col s12 m6">
                        <div className="card card-background">
                            <div className="card-content white-text">
                                <p>Fact: {fact.fact}</p>
                                <p>Image URL: {fact.imageURL}</p>

                            </div>
                            <div className="card-action">
                                <button className="waves-effect waves-light btn edit-background"><i className="material-icons">edit</i></button>
                                <button className="waves-effect waves-light btn button-right delete-background" onClick={(e)=>{this.deleteFact(e, fact._id)}}><i className="material-icons">cancel</i></button>
                            </div>

                        </div>
                    </div>
                   
                </div>
            )
        })
    }
    renderAuthorizeUser(){
        switch(this.props.user){
            case null:
                return <div>Loading...</div>
            default:
                if(this.props.user.userType === 'admin'){
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
                                <div>
                                    {this.renderFacts()}
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
                <div className="admin-link-wrapper">
                    <Link className="active" to="/facts/manageFacts">Manage Facts</Link>
                    <Link to="/polls/managePolls">Manage Polls</Link>
                </div>
                {this.renderAuthorizeUser()}
            </div>
            
        )
    }
}

function mapStateToProps({user, facts}){
    return {user, facts}
}

export default connect(mapStateToProps, {fetchFacts})(AddFact)
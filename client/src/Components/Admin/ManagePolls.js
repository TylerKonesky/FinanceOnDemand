import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import { fetchPolls } from '../../actions';

import '../body.css';
import './ManagePolls.css';
import './AdminHeader.css';

class ManagePolls extends Component{
    constructor(props){
        super(props);

        this.state = {
            question: '',
            answers: ''
        }
    }
    componentDidMount(){
        this.props.fetchPolls();
    }

    onQuestionChange(e){
        this.setState({question: e.target.value})
    }
    onAnswerChange(e){
        this.setState({answers: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        axios.post('/api/polls/newPoll', {question: this.state.question, answers: this.state.answers}).then(res =>{
            console.log('new poll added')
        })
    }

    renderAnswers(answersArray){
        return answersArray.map(answer =>{
            return(
                <p key={answer.answer}>
                    A: {answer.answer}
                </p>
            )
        })
    }

    

    renderPolls(){
        if(this.props.polls === null || this.props.polls === false){
            return (
                <div> No data found</div>
            )
        }
        return this.props.polls.map(poll =>{
            return (
                <div key={poll._id} className="row card-wrapper">
                    <div className=" col s12 m6">
                        <div className="card card-background">
                            <div className="card-content white-text">
                                <p>Question: {poll.question}</p>
                                <div>Answers: {this.renderAnswers(poll.answers)}</div>

                            </div>
                            <div className="card-action">
                                <button className="waves-effect waves-light btn edit-background"><i className="material-icons">edit</i></button>
                                <button className="waves-effect waves-light btn button-right delete-background" ><i className="material-icons">cancel</i></button>
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
                            <h3 className="fact-header">Add New Poll</h3>
                            <form className=""> 
                                <div className="input-wrapper">
                                    <div>
                                        <label>Poll</label>
                                        <input onChange={e=>this.onQuestionChange(e)}></input>
                                    </div>
                                    <div>
                                        <label>Answers</label>
                                        <input onChange={e=>this.onAnswerChange(e)} ></input>
                                    </div>

                                </div>

                                <div className="poll-answers-notice">* Answers should be entered as a comma separated list. (ex. true, false, I don't know)</div>


                                <div className="button-wrapper">
                                    <button className="teal btn-flat right contact-button" onClick={e=>this.onSubmit(e)}>
                                            Submit
                                            <i className="material-icons left">add</i>
                                    </button>
                                </div>
                                <div>
                                    {this.renderPolls()}
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
                    <Link to="/facts/manageFacts">Manage Facts</Link>
                    <Link className="active" to="/polls/managePolls">Manage Polls</Link>
                </div>
                {this.renderAuthorizeUser()}
                
            </div>
            
        )
    }
}

function mapStateToProps({user, polls}){
    return {user, polls}
}

export default connect(mapStateToProps, {fetchPolls})(ManagePolls)
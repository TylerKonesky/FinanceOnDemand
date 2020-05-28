import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPolls, fetchUser} from '../../actions/index';
import axios from 'axios';
import './Poll.css';

class Poll extends Component{
  
    componentDidMount(){
        this.props.fetchPolls();
        this.props.fetchUser();
    }

    handleClick = (response) => {
        axios.post('/api/polls/response', {id: response.id, response: response.answer}).then(res =>{
            this.props.fetchPolls();
        })
    }


    //***** Checks for the active poll and then renders information based on the active status *****
    pollRespondable(){
        switch(this.props.polls){
            case null:
                return null;
            case false: 
                return(<div>There are currently no active polls</div>);
            default:
                return this.props.polls.map(poll =>{
                    if(poll.active === true){
                        if(poll.respondedUsers.includes(this.props.user._id)){
                            return(<div key={poll.question}>{this.renderPollResults(poll)}</div>)
                        }
                        return(
                            <div key={poll.question} className="row">
                                <div className="col s12 m6">
                                    <div className="card poll-card-background">
                                        <div className="card-content white-text">
                                            <span className="card-title">Monthly Poll</span>
                                            <p>{poll.question}</p> 
                                        </div>
                                        <div className="card-action">
                                            {this.renderResponseTypes(poll)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })     
        }
    }

    //***** Creates the component to render pull results (is called when a user has already voted) *****
    renderPollResults(poll){
        let total = 0;
        poll.answers.map(answer =>{
            total += answer.responses;
        })
        return(
            <div key={poll.id} className="row">
                <div className="col s12 m6">
                    <div className="card poll-card-background">
                        <div className="card-content white-text">
                            <span className="card-title">Monthly Poll Results- {poll.question}</span>
                            {this.calculateResults(poll.answers, total)}
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }

    //***** Calculates the total responses of the active poll / each response total *****
    calculateResults(answers, total){
        return answers.map(answer =>{
            return(
            <div key={answer.answer} className="results-wrapper"> 
                <div className="result-answer">
                    {answer.answer}
                </div>
                <div className="result-percent">
                    {Math.floor((answer.responses / total) * 100)}%
                </div>
            </div>
            )
        })
    }

    // ***** creates a button for every response type *****
    renderResponseTypes(poll){
        return poll.answers.map(answer =>{
            return(
                <button key={answer.answer} className="waves-effect btn poll-button" onClick={()=>this.handleClick({id: poll._id, answer: answer.answer.toString()})}>{answer.answer}</button>
            )
        })
    }
    render(){
        return(
            <div>
                {this.pollRespondable()}
            </div>
        )
    }
}

function mapStateToProps({user, polls}){
    return {user, polls}
}

export default connect(mapStateToProps, {fetchPolls, fetchUser})(Poll)
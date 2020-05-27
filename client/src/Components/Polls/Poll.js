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

    handleClick = (answer) => {
        axios.post('/api/polls/response', {id: this.props.polls[0]._id, response: answer}).then(res =>{
            console.log(res.data)
        })
    }
    pollRespondable(){
        switch(this.props.polls){
            case null:
                return(<div>Poll</div>);
            case false: 
                return(<div>No polls found....</div>);
            default:
                if(this.props.polls[0].respondedUsers.includes(this.props.user._id)){
                return(<div>{this.renderPollResults()}</div>)
                }
                return(
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card poll-card-background">
                                <div className="card-content white-text">
                                    <span className="card-title">Monthly Poll</span>
                                    <p>{this.props.polls[0].question}</p> 
                                </div>
                                <div className="card-action">
                                    {this.renderResponseTypes()}
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }
    renderPollResults(){
        switch(this.props.polls){
            case null:
                return(<span>Loading answers...</span>);
            case false: 
                return(<span>No polls found....</span>);
            default:
                let total = 0;
                this.props.polls[0].answers.map(answer =>{
                    total += answer.responses;
                })
                console.log(total)
                return(
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card poll-card-background">
                                <div className="card-content white-text">
                                    <span className="card-title">Monthly Poll Results- {this.props.polls[0].question}</span>
                                    {this.calculateResults(this.props.polls[0].answers, total)}
                                </div>
                               
                            </div>
                        </div>
                    </div>
                )
        }
    }

    calculateResults(answers, total){
        return answers.map(answer =>{
            return(
            <div className="results-wrapper"> 
                <div className="result-answer">
                    {answer.answer}
                </div>
                <div className="result-percent">
                    {Math.floor((answer.responses / total)*100)}%
                </div>
            </div>
            )
        })
    }
   
    renderResponseTypes(){
        switch(this.props.polls){
            case null:
                return(<span>Loading answers...</span>);
            case false: 
                return(<span>No polls found....</span>);
            default:
                return this.props.polls[0].answers.map(answer =>{
                    return(
                        <button key={answer.answer} className="waves-effect btn poll-button" onClick={()=>this.handleClick({answer: answer.answer.toString()})}>{answer.answer}</button>
                    )
                })
        }
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
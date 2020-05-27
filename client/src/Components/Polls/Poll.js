import React, {Component} from 'react';
import axios from 'axios';

class Poll extends Component{

    handleResponse = (response) =>{
        axios.post('/api/polls/response', {response: response}).then(
            console.log(response)
        )
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Monthly Poll</span>
                                <p>Do you have enough in savings to last the next 6 months with no income?</p> 

                            </div>
                            <div className="card-action">
                                <a href="/api/polls/response">Yes</a>
                                <a href="/api/polls/response">No</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Poll
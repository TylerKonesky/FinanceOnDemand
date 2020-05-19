import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../../actions/index';
import '../body.css'

class ManageProfile extends Component{
   

    updateContactPhone(e){
        this.props.user.contactPhone = e
    }

    updateUsername(e){
        this.props.user.username = e
    }

    updateProfile(e){
        e.preventDefault();
        axios.patch('/api/users/updateProfile', this.props.user).then(res =>{
            console.log(res.data)
        })
    }

    renderNotRegistered(){
        switch(this.props.user){
            case null:
            case false: 
                return(
                    null
                )
            default:
                if(this.props.user.registered){
                    return(null)
                }
                return(
                    <div>Please complete your registration</div>
                )
        }
    }
    renderProfile(){
        switch(this.props.user){
            case null:
            case false:
                return(<div>loading...</div>)
            default:
                console.log(this.props.user)
                return(
                    <div>
                        <div>
                            Name: {this.props.user.name}
                        </div>
                        <div>
                            Google Email: {this.props.user.userEmail}
                        </div>
                        <div>
                            Contact Phone: <input type="text" defaultValue={this.props.user.contactPhone} onChange={(e)=>{this.updateContactPhone(e.target.value)}}></input>
                        </div>
                        <div>
                            Username: <input type="text" defaultValue={this.props.user.username} onChange={(e)=>{this.updateUsername(e.target.value)}}></input>
                        </div>
                        <button onClick={(e)=>{this.updateProfile(e)}}>Submit</button>
                       
                    </div>
                )
        }
    }
    render(){
        return(
            <div className="container body-size">
                This is the Manage Profile page
                {this.renderNotRegistered()}
                {this.renderProfile()}
            </div>
        )
    }
}

function mapStateToProps({user}){
    return {user}
}

export default connect(mapStateToProps, actions)(ManageProfile)
import React, { Component } from 'react'
import M from 'materialize-css';
import openRoad from '../../images/openRoad.jpg'
import {connect} from 'react-redux';
import Poll from '../Polls/Poll'
import './Landing.css'

class Landing extends Component{
    componentDidMount(){
        let elements = document.querySelectorAll('.parallax');
        M.Parallax.init(elements)

    }

    renderWelcome(){
        switch(this.props.user){
            case null:
            case false:
                return <div className="header">Welcome to Finance on Demand</div>;
            default:
        return <div className="header">Welcome, {this.props.user.name}, to Finance on Demand</div>
        }
    }
    render(){
        
        return (
            <div className="">
                <div className="parallax-container">
                    <div className="parallax">
                        <img src={openRoad} alt="open road"></img>
                    </div>
                </div>
                <div className="section landing-body-wrapper" style={{height: '300px'}}>
                    <div className="row container ">
                        {this.renderWelcome()}
                        <div className="grey-text text-darken-3 lighten-3"><Poll /></div>
                    </div>
                    
                </div>
                <div className="parallax-container">
                    <div className="parallax">
                        <img src={openRoad} alt="open road"></img>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({user}){
    return {user}
}

export default connect(mapStateToProps)(Landing)
import React, { Component } from 'react'
import M from 'materialize-css';
import openRoad from '../images/openRoad.jpg'
import {connect} from 'react-redux';

class Landing extends Component{
    componentDidMount(){
        let elements = document.querySelectorAll('.parallax');
        M.Parallax.init(elements)

    }

    renderWelcome(){
        switch(this.props.auth){
            case null:
            case false:
                return <h2 className="header">Welcome to finance on Demand</h2>;
            default:
        return <h2 className="header">Welcome, {this.props.auth.name}, to Finance on Demand</h2>
        }
    }
    render(){
        
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax">
                        <img src={openRoad}></img>
                    </div>
                </div>
                <div className="section white" style={{height: '300px'}}>
                    <div className="row container">
                        {this.renderWelcome()}
                        <p className="grey-text text-darken-3 lighten-3">... random text about what we do ...</p>
                    </div>
                    
                </div>
                <div className="parallax-container">
                    <div className="parallax">
                        <img src={openRoad}></img>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({auth}){
    return {auth}
}

export default connect(mapStateToProps)(Landing)
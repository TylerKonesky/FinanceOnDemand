import React, { Component } from 'react';
import './body.css';
import compass from '../images/compass.jpg';
import keys from '../images/keys.jpg';
import pennies from '../images/pennies.jpg';
import Card from './Cards/Card';

export default class Tools extends Component{
    render(){
        return (
            <div>
                <div className="page-title">Tools</div>
                <div className="body-size grid">
                    <Card image={compass} title="Guidance" content="Learn more about how we can guide you to a successful future."/>
                    <Card image={keys} title="Retirement" content="Learn more about how we can guide you to a successful future."/>
                    <Card image={pennies} title="Manage Budget" content="Learn more about how we can guide you to a successful future."/>
                 </div>

            </div>
            
        )
    }
}
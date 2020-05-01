import React, { Component } from 'react'
import '../body.css';
import CreditCard from '../Calculators/CreditCard';

export default class Privacy extends Component{
    render(){
        return (
            <div className="body-size">
                Privacy notice
                <CreditCard />
            </div>
        )
    }
}
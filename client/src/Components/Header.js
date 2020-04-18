import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo" href="/">Finance On Demand</a>
                    <ul className="right">
                        <li><Link to="/tools">Tools</Link></li>
                        <li><Link to="/privacy">Privacy</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                        <li><Link to="/facts">Facts</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
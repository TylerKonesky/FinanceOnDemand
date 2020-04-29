import React, { Component } from 'react';
import '../body.css'
import './facts.css'
import image1 from '../../images/image-1.jpg';
import image2 from '../../images/image-2.jpg';
import image3 from '../../images/image-3.jpg';

export default class Facts extends Component{
    render(){
        return (
            <div className="body-size facts-grid container">
                <div className="col s12 each-card">
                    <div className="col s5 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={image1} style={{width: '100%'}}></img>
                                <span className="card-title">Card Title</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light-red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>This is a bunch of random content... Will ad more later...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-card">
                    <div className="col s3 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={image2} style={{width: '100%'}}></img>
                                <span className="card-title">Card Title</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light-red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>This is a bunch of random content... Will ad more later...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-card">
                    <div className="col s3 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src={image3} style={{width: '100%'}}></img>
                                <span className="card-title">Card Title</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light-red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>This is a bunch of random content... Will ad more later...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
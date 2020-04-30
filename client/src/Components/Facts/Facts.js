import React, { Component } from 'react';
import '../body.css'
import './facts.css'
import image1 from '../../images/image-1.jpg';
import image2 from '../../images/image-2.jpg';
import image3 from '../../images/image-3.jpg';
import Card from '../Cards/Card';

export default class Facts extends Component{
    render(){
        return (
            <div>
                <div className="page-title">Facts</div>
                <div className="body-size grid ">
                    <Card image={image1} title="Card Title" content="This is the random content for this card... we will add more to this later on..."/>
                    <Card image={image2} title="Card Title" content="This is the random content for this card... we will add more to this later on..."/>
                    <Card image={image3} title="Card Title" content="This is the random content for this card... we will add more to this later on..."/>
                </div>
            </div>
            
        )
    }
}
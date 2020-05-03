import React from 'react';
import './Card.css'

const Card = props =>{
    const {title, image, content} = props;
    return(
        <div className="col s12 each-card">
                    <div className="col s5 m4">
                        <div className="card">
                            <div className="card-image each-image">
                                <img src={image} style={{width: '100%'}}></img>
                                <span className="card-title">{title}</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light-red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Card
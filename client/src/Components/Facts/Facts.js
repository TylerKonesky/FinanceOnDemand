import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchFacts } from '../../actions';
import '../body.css'
import './facts.css'

class Facts extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.props.fetchFacts()
    }

    dynamicCard(fact, location){
        let style = {"alignSelf": location}
        return (
            <div style={style}>
                <img src={this.urlParser(fact.imageURL)} alt=""></img>
            </div>
            // <div key={fact._id}className="col s12 m7 card-width" style={style}>
            //     <div className="card horizontal">
            //         <div className="card-image">
            //             <img src={this.urlParser(fact.imageURL)} alt=""></img>
            //         </div>
            //         <div className="card-stacked">
            //             <div className="card-content">
            //                 {fact.fact}
            //             </div>
            //         </div>
        
            //     </div>
            // </div>
        )
    }

    urlParser(url){
        url.split("/");
        let id = url.split('/')
        return `https://drive.google.com/thumbnail?id=${id[id.length -2]}`
    }

    renderFacts(){
        switch(this.props.facts){
            case null: 
                return(<div>Loading...</div>);
            case false:
                return(<div>No facts available at this time</div>)
            default:
                let count = 1;
                return this.props.facts.map(fact =>{
                    switch(count){
                        case 1:
                            count = 2
                            return(
                                this.dynamicCard(fact, "flex-start")
                            )
                        case 2:
                            count = 3
                            return(
                                this.dynamicCard(fact, "center")
                            )
                        case 3:
                            count = 4
                            return(
                                this.dynamicCard(fact, "flex-end")
                            )
                        default:
                            count = 1
                            return(
                                this.dynamicCard(fact, "center")
                            )
                    }

                })
                

        }
    }
    
    render(){
        return (
            <div className="container facts-background">
                <div className="page-title">Facts</div>
                <div className="body-size ">
                    {this.renderFacts()}
                </div>
            </div>
            
        )
    }
}

function mapStateToProps({auth, facts}){
    return {auth, facts}
}

export default connect(mapStateToProps, {fetchFacts})(Facts)
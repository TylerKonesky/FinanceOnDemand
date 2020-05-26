import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchArticles } from '../../actions';
import '../body.css'

class ViewAllBlogs extends Component{
    componentDidMount(){
        this.props.fetchArticles();
    }
    renderArticles(){
        switch(this.props.articles){
            case null:
                return(<div>Loading...</div>)
            case false: 
                return(<div>No Blogs found</div>)
            default: 
                console.log(this.props.articles)
                return this.props.articles.map(article =>{
                    return(
                        <div>
                            <a href={`article/${article._id}`}>Title: {article.title}</a>
                        </div>
                    )
                })
        }
    }
    render(){
        return(
            <div className="container body-size">
                <h2>Finance on Demand Articles</h2>
                {this.renderArticles()}
            </div>
        )
    }
}

function mapStateToProps({auth, articles}){
    return {auth, articles}
}

export default connect(mapStateToProps, {fetchArticles})(ViewAllBlogs)
import React, {Component} from 'react';
import axios from 'axios';


class ViewBlog extends Component{
    constructor(props){
        super(props);
        this.state = {
            article: null
        }
    }

    componentDidMount(){
        axios.get(`/api/articles/${this.props.match.params.id}`).then((res) =>{
            if(res.data === "Article not found"){
                this.setState({article: false})
            }else{
                this.setState({article: res.data})
            }
        })
    }

    renderArticle(){
        switch(this.state.article){
            case null:
                return(<div>Loading...</div>)
            case false: 
                return(<div>This article is no longer available</div>)
            default: 
                    return(
                        <div>
                            <h2>Title: {this.state.article.title}</h2>
                            <div dangerouslySetInnerHTML={{__html: this.state.article.body}}></div>
                        </div>
                    )
        }
    }

    render(){
        return(
            <div className="container body-size">
                {this.renderArticle()}
            </div>
        )
    }
}

export default ViewBlog
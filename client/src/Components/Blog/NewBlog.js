import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../body.css';
import './TextEditor.css';

class NewBlog extends Component{
    constructor(props){
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.onChange = editorState => this.setState({editorState})
    }

    toggleInlineStyle = event => {
        event.preventDefault();
        let style = event.currentTarget.getAttribute('data-style');
        this.setState({
            editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)
        })
    }
    render(){
        return(
            <div className="container body-size">
                <h1>This is the new blog post</h1>
                
                <div className="text-editor">
                    <div className="button-wrapper">
                        <input type="button" value="Bold" data-style="BOLD" onMouseDown={this.toggleInlineStyle}/>  
                        <input type="button" value="Italic" data-style="ITALIC" onMouseDown={this.toggleInlineStyle}/>  
                        <input type="button" value="Underline" data-style="UNDERLINE" onMouseDown={this.toggleInlineStyle}/> 
                    </div>
                       
                    <Editor editorState={this.state.editorState} onChange={this.onChange}/> 
                </div>
                
            </div>
        )
    }
}

export default NewBlog
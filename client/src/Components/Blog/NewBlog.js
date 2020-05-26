import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import '../body.css';
import './TextEditor.css';

class NewBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: '',
            title: ''
        }
    }
  handleEditorChange = (e, content, editor) => {
    console.log('Content was updated:', content.getContent());
    this.setState({
      content: content.getContent({format: 'html'})
    })
  }

  handleTitleChange = (e) =>{
    this.setState({title: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    console.log("submitted", this.state.content)
    axios.post('/api/articles/new', {content: this.state.content, title: this.state.title}).then(res =>{
      console.log(res)
    })    
  }

  render() {
    return (
        <form className="body-size text-editor-wrapper container">
            <h2>Create New blog Post</h2>
            <label>Title</label>
            <input type="text" onChange={e => this.handleTitleChange(e)}></input>
            <Editor id="test"
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  menubar: true,
                  height: 500,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
                }}
                value={this.state.content}
                onEditorChange={this.handleEditorChange}
                onSubmit={this.onSubmit}
                
            />
            <button onClick={e=>this.onSubmit(e)}>Submit</button>
        </form>
     
    );
  }
}

export default NewBlog;

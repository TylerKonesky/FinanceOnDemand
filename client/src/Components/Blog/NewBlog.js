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
            display: ''
        }
    }
  handleEditorChange = (e, content, editor) => {
    console.log('Content was updated:', content.getContent());
    this.setState({
      content: content.getContent({format: 'html'})
    })
  }

  onSubmit(e){
    e.preventDefault();
    console.log("submitted", this.state.content)
    axios.post('/api/blogs/new', {content: this.state.content}).then(res =>{
      console.log(res)
    })    
  }

  render() {
    return (
        <form className="body-size text-editor-wrapper container">
            <h2>Create New blog Post</h2>
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

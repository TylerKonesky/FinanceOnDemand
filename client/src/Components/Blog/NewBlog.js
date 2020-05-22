import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../body.css';
import './TextEditor.css';

class NewBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: ''
        }
    }
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  onSubmit(e){
    e.preventDefault();
    let check = document.getElementById('test')
    // this.setState({
    //     display: check.form
    // })
    console.log(check.form)
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
                onEditorChange={this.handleEditorChange}
                
            />
            <button onClick={e=>this.onSubmit(e)}>Submit</button>
            <div>
            {this.state.display}
            </div>
            
        </form>
     
    );
  }
}

export default NewBlog;

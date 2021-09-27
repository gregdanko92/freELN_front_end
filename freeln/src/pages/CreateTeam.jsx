import { Component } from 'react';
import ProgramModel from '../models/ProgramModel';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Widget } from "@uploadcare/react-widget";
import Header from '../components/Header';
import NavTeam from '../components/NavTeam';


class CreateTeam extends Component {

  state = {
    name: '',
    date: '',
    content:'',
    text:'',
    file:''
  }

  handleNameChange =(event) => {
    this.setState({name:event.target.value})
    console.log(this.state.name)
  }
  handleDateChange =(event) => {
    this.setState({date:event.target.value})
    console.log(this.state.date)
  }
  handleContentChange =(event) => {
    this.setState({content:event.target.value})
    console.log(this.state.content)
  }
  handleTextChange =(event) => {
    this.setState({text:event.target.value})
    console.log(this.state.text)
  }

  handleFileUpload = (input: any) => {
    this.setState({ file: input.cdnUrl });
  }

//   handleFileDelete = (event)=>{
//       this.preventDefault()
//       this.setState({file:''})
//   }

  handleFormSubmit = (event) => {
    event.preventDefault() 
    console.log('form was submitted')
    axios.post(`http://localhost:4000/api/programs/${this.props.match.params.programId}`, {
    name: this.state.name,
    date: this.state.date,
    content: this.state.content,
    text:this.state.text,
    file:this.state.file
    
    }).then((response)=>{
        this.props.history.push(`/programs/${this.props.match.params.programId}`)  
    }).catch(function(error){
      console.log(error)
    })
    
  }
  
  render() {
    console.log(this.state)
    return (
      <div className='create-a-program-page'>
        <div className='header-nav-projects'>
          <Header/>
          <NavTeam/>
        </div>

        <div className='create-a-project-headline'>
            <h3>Add an Experiment
            </h3>
        </div>

        <form className='form-element-experiment'

        onSubmit={this.handleFormSubmit}>
            <div className='form-element-child'>
                <h2>Experiment Name</h2>
                <input 
                type='text'
                value={this.state.name}
                onChange={this.handleNameChange}
                />

                <h2>Experiment Date</h2>
                <input 
                type='text'
                value={this.state.date}
                onChange={this.handleDateChange}
                />
                <h2>Content</h2>
                <input 
                type='text'
                value={this.state.content}
                onChange={this.handleContentChange}
                />
            <div className="CKeditor-5">
                    <h2>Experiment Notes</h2>
                    <CKEditor
                        
                        editor={ ClassicEditor }
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            this.setState({text:data})
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                </div>
            </div>
          <p>
            <label htmlFor='file'>Your file:</label>{' '}
            <Widget 
                
                publicKey='9bfccb6db4bc0a8cb27c' 
                id='file'
                onChange={this.handleFileUpload} />
            </p>

          <input
          className='form-element-child-button'
           type='submit'  />
            {/* <button type="button" onClick={this.handleDeleteFile}>delete this file</button> */}
        </form>
        </div>
    );
  }
}

export default withRouter(CreateTeam);


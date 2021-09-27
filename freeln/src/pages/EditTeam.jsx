import { Component } from 'react';
import ProgramModel from '../models/ProgramModel';
import axios from 'axios'
import { withRouter, Redirect } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from '../components/Header'
import NavTeam from '../components/NavTeam'
import { Widget } from "@uploadcare/react-widget";




class CreateTeam extends Component {

  state = {
    name: '',
    date: '',
    content:'',
    text:'',
    file:'',
    redirect:false
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

  handleFormSubmit = (event) => {
    event.preventDefault() 
    console.log('form was submitted')
    //need to change the post route to put?
    axios.put(`http://localhost:4000/api/programs/${this.props.match.params.programId}/${this.props.match.params.teamId}`, {
    name: this.state.name,
    date: this.state.date,
    content: this.state.content,
    text:this.state.text,
    file:this.state.file

    }).then((response)=>{
        console.log(response, 'RESPNSE')
        // this.props.history.push(`/programs/${this.props.match.params.programId}`)  
        this.setState({redirect:true})
    }).catch(function(error){
      console.log(error)
    })
    
  }
  componentDidMount = ()=>{
      //api call here
      axios.get(`http://localhost:4000/api/programs/${this.props.match.params.programId}/${this.props.match.params.teamId}/edit`)
      .then((response)=>{
          console.log(response)
          this.setState({
              content:response.data.content,
              date:response.data.date,
              name:response.data.name,
              text:response.data.text,
              file:response.data.file
        })

          })
        }
      
  

  render() {
      if (this.state.redirect){
          return <Redirect to={`/programs/${this.props.match.params.programId}/${this.props.match.params.teamId}`}/>
      }
    console.log(this.state)
    return (
      <div className='create-a-program-page'>
          <div className='header-nav-projects'>
          <Header/>
          <NavTeam/>
        </div>
        <div className='create-a-project-headline'>

        <h3>Edit the Experiment</h3>
        </div>

        <form className='form-element-experiment'
        onSubmit={this.handleFormSubmit}>
        <div  className='form-element-child'>

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
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data={this.state.text}
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
          type='submit' />
        </form>
        </div>
    );
  }
}

export default withRouter(CreateTeam);


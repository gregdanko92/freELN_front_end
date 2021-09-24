import { Component } from 'react';
import ProgramModel from '../models/ProgramModel';
import axios from 'axios'
import { withRouter, Redirect } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



class CreateTeam extends Component {

  state = {
    name: '',
    date: '',
    content:'',
    text:'',
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

  handleFormSubmit = (event) => {
    event.preventDefault() 
    console.log('form was submitted')
    //need to change the post route to put?
    axios.put(`http://localhost:4000/api/programs/${this.props.match.params.programId}/${this.props.match.params.teamId}`, {
    name: this.state.name,
    date: this.state.date,
    content: this.state.content,
    text:this.state.text
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
              text:response.data.text
        })

          })
        }
      
  

  render() {
      if (this.state.redirect){
          return <Redirect to={`/programs/${this.props.match.params.programId}/${this.props.match.params.teamId}`}/>
      }
    console.log(this.state)
    return (
      <div >
        <h2>Edit the Experiment</h2>
        <form 
        onSubmit={this.handleFormSubmit}>
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
          <input type='submit' />
        </form>

        </div>
    );
  }
}

export default withRouter(CreateTeam);


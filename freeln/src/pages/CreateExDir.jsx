import { Component } from 'react';
import ProgramModel from '../models/ProgramModel';
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class CreateExDir extends Component {
    
  state = {
    name: ''
    
  }

  handleNameChange =(event) => {
    this.setState({name:event.target.value})
    console.log(this.state.name)
  }
  
  handleFormSubmit = (event) => {
      console.log(this.props.match.params.teamId)
    event.preventDefault() 
    console.log('form was submitted')
    axios.post(`http://localhost:4000/api/programs/${this.props.match.params.programId}/${this.props.match.params.teamId}`, {
    name: this.state.name
    }).then((response)=>{
        this.props.history.push(`/programs/${this.props.match.params.programId}/${this.props.match.params.teamId}`)  
    }).catch(function(error){
      console.log(error)
    })
    
  }

  render() {
    console.log(this.state)
    return (
      <div >
        <h2>Add a new directory of experiments</h2>
        <form 
        
        onSubmit={this.handleFormSubmit}>
            <h2>Experiment Directory Name</h2>
          <input 
          type='text'
          value={this.state.name}
          onChange={this.handleNameChange}
          />
          
          <input type='submit' />
        </form>
        </div>
    );
  }
}

export default withRouter(CreateExDir);


import { Component } from 'react';
import ProgramModel from '../models/ProgramModel';
// const axios = require('axios').default;
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class CreateProgram extends Component {
  state = {
    name: '',
    target: '',
    stakeholder:''
  }

  handleNameChange =(event) => {
    this.setState({name:event.target.value})
    console.log(this.state.name)
  }
  handleTargetChange =(event) => {
    this.setState({target:event.target.value})
    console.log(this.state.target)
  }
  handleStakeholderChange =(event) => {
    this.setState({stakeholders:event.target.value})
    console.log(this.state.stakeholders)
  }
  handleFormSubmit = (event) => {
    event.preventDefault() 
    console.log('form was submitted')
    axios.post('http://localhost:4000/api/programs', {
    name: this.state.name,
    target: this.state.target,
    stakeholders: this.state.stakeholders
    }).then((response)=>{
        this.props.history.push('/programs/')  
    }).catch(function(error){
      console.log(error)
    })
    
  }

  render() {
    console.log(this.state)
    return (
      <div >
        <h2>Add a Program</h2>
        <form 
        
        onSubmit={this.handleFormSubmit}>
            <h2>Program Name</h2>
          <input 
          type='text'
          value={this.state.name}
          onChange={this.handleNameChange}
          />
          <h2>Add a Target</h2>
          <input 
          type='text'
          value={this.state.target}
          onChange={this.handleTargetChange}
          />
          <h2>Add stakeholders</h2>
          <input 
          type='text'
          value={this.state.stakeholders}
          onChange={this.handleStakeholderChange}
          />
          <input type='submit' />
        </form>
        </div>
    );
  }
}

export default withRouter(CreateProgram);
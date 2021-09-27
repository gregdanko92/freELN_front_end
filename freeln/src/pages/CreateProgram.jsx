

import { Component } from 'react';
import ProgramModel from '../models/ProgramModel';
// const axios = require('axios').default;
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import Header from '../components/Header'
import NavProgram from '../components/NavProgram';

class CreateProgram extends Component {
  state = {
    name: '',
    description: '',
    date:''
  }

  handleNameChange =(event) => {
    this.setState({name:event.target.value})
    console.log(this.state.name)
  }
  handleDescriptionChange =(event) => {
    this.setState({description:event.target.value})
    console.log(this.state.description)
  }
  handleDateChange =(event) => {
    this.setState({date:event.target.value})
    console.log(this.state.date)
  }
  handleFormSubmit = (event) => {
    event.preventDefault() 
    console.log('form was submitted')
    axios.post('http://localhost:4000/api/programs', {
    name: this.state.name,
    description: this.state.description,
    date: this.state.date
    }).then((response)=>{
        this.props.history.push('/programs/')  
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
          <NavProgram/>
        </div>

        <div className='create-a-project-headline' >
          <h2>Add a new Project</h2>
        </div>
          <form className='form-element'
          
          onSubmit={this.handleFormSubmit}>
            <div className='form-element-child'>
              <h2>Project Name</h2>
              <input 
              type='text'
              value={this.state.name}
              onChange={this.handleNameChange}
              />

              <div className='form-element-child'>
                <h2>Date Initiated</h2>
                <input 
                type='text'
                value={this.state.date}
                onChange={this.handleDateChange}
                />


            <div className='form-element-child'>
              <h2>Project Description</h2>
              <input className='description-input'
              type='text'
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              />
              </div>
            </div>
              </div>
              <input 
              className='form-element-child-button'
               type='submit' />
          </form>
      </div>
    );
  }
}

export default withRouter(CreateProgram);
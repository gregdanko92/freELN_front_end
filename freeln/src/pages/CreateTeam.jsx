import { Component } from 'react';
import ProgramModel from '../models/ProgramModel';
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class CreateTeam extends Component {
  state = {
    name: '',
    members: ''
  }

  handleNameChange =(event) => {
    this.setState({name:event.target.value})
    console.log(this.state.name)
  }
  handleMembersChange =(event) => {
    this.setState({members:event.target.value})
    console.log(this.state.members)
  }
  handleFormSubmit = (event) => {
    event.preventDefault() 
    console.log('form was submitted')
    axios.post(`http://localhost:4000/api/programs/${this.props.match.params.programId}`, {
    name: this.state.name,
    members: this.state.members,//changed target to members
    }).then((response)=>{
        this.props.history.push(`/programs/${this.props.match.params.programId}`)  
    }).catch(function(error){
      console.log(error)
    })
    
  }

  render() {
    console.log(this.state)
    return (
      <div >
        <h2>Add a Team</h2>
        <form 
        
        onSubmit={this.handleFormSubmit}>
            <h2>Team Name</h2>
          <input 
          type='text'
          value={this.state.name}
          onChange={this.handleNameChange}
          />
          <h2>Add Members</h2>
          <input 
          type='text'
          value={this.state.members}
          onChange={this.handleMembersChange}
          />
          <input type='submit' />
        </form>
        </div>
    );
  }
}

export default withRouter(CreateTeam);
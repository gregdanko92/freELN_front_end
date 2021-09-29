import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";
import axios from 'axios'
import NavProgram from "../components/NavProgram";
import Header from "../components/Header";

const url = 'http://localhost:4000/api/programs';
function Program(props) {
    const programId = props.match.params.programId
    const [programData, setProgramData] = useState({});
  
  
  // takes in a callback function as first required argument
  useEffect(function(){
      console.log('useEffect was called');
    //   fetchProgramData() 
      //added this function, so that the games render when the page renders, not waiting for the button
      fetch(`${url}/${programId}`)
            .then((response)=> response.json())
            .then((data)=>{
                setProgramData(data)
            })
            .catch((err)=>{
                console.log(err)
            })
    //   ProgramModel.show(props.match.params.programId).then((data) => {
    //     setProgramData(data)
    //   })
      return console.log('runs on unmount', programData)

  }, [programId])
  
//   function fetchProgramData(){
//   }

function handleDelete(id){
    // const newTeams = programData.filter((team)=>team._id !==id)
    // setProgramData(newTeams)
    // console.log('delete clicked')
    // console.log(id)
    axios.delete(`http://localhost:4000/api/programs/${programId}/${id}`)
    window.location.reload(false); 
   }
     function generateTeamsList(programData) {
         if(programData.teams){
                 return  programData.teams.map((team, index) => (
               


               

               <Link className='project-directories-main-child' to={`/programs/${props.match.params.programId}/${team._id}`} key={index}>
               <div className='folder-delete'>
          
                <img className='folder-icon' src="https://img.icons8.com/ios-filled/50/000000/thin-test-tube.png"/>
          
                <button className='project-directories-delete-button'
                    onClick={()=>handleDelete(team._id)}>
                      <img src="https://img.icons8.com/ios/50/000000/close-window.png"/>
                </button>
          
                </div>

                <div className='title-date'>

                <div className='project-title'>
                  {team.name}
                </div>

                <div className='project-date'>
                  {team.date}
                </div>

                </div>



                <div className='project-description'>
                  {team.content}
                </div>
              </Link>
               
             ));
         }else{
            return
         }
            
    console.log('program data', programData)
  }
  
  return (
    <div>
      <div className='header-nav-projects'>
        <Header/>
        <NavProgram/>
      </div>

      <div className='project-directories-show'>
          <div className='project-directories-headline'>{programData.name}
          </div>
          <div className='project-details'>
            <p>Description: {programData.description}</p>
            <p>Project initiated on {programData.date}</p>
          </div>

          <Link className='add-a-project-button' to={`/programs/${programId}/create`}>
            Add a new Experiment
        </Link>
          
          <div className='project-directories-main'>
              {generateTeamsList(programData)}
          </div>
          
      </div>
    </div>
  );
}

export default Program;

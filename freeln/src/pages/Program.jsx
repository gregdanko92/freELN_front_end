import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";
import axios from 'axios'

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
      return console.log('runs on unmount')

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
               <>
               <Link to={`/programs/${props.match.params.programId}/${team._id}`} key={index}>
                   <h2>{team.name}</h2>
               </Link>
               <button
            onClick={()=>handleDelete(team._id)}>Delete</button>
             </>
             ));
         }else{
            return
         }
            
    console.log('program data', programData)
  }
  
  return (
    <div>
        <h1>{programData.name}</h1>
        <h3>{programData.target}</h3>
        <h2>Experiment Directory</h2>
        <h2>
            {generateTeamsList(programData)}
        </h2>
        <div>
            {/* {getStakeholders(programData)} */}
        </div>
        <Link to={`/programs/${programId}/create`}>
          Add a new Experiment
      </Link>
    </div>
  );
}

export default Program;

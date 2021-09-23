import { program } from "@babel/types";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";

const url = 'http://localhost:4000/api/programs';
function Team(props) {
    const programId = props.match.params.programId
    const teamId = props.match.params.teamId
    const [programData, setProgramData] = useState({});
  
  
  // takes in a callback function as first required argument
  useEffect(function(){
      console.log('useEffect was called');
      //   fetchProgramData() 
      //added this function, so that the games render when the page renders, not waiting for the button
      fetch(`${url}/${programId}/${teamId}`)
      .then((response)=> response.json())
      .then((data)=>{
          setProgramData(data)
          console.log(data, "The data")
        })
        .catch((err)=>{
            console.log(err)
            })
    //   ProgramModel.show(props.match.params.programId).then((data) => {
    //     setProgramData(data)
    //   })
      return console.log('runs on unmount', programData)

  }, [programId, teamId])
  


     function generateExDirList(programData) {
         console.log(programData)
         if(programData.experimentDirectories){
             
                 return  programData.experimentDirectories.map((exDir, index) => (
               <>
               <Link to={`/programs/${props.match.params.programId}/${props.match.params.teamId}/${exDir._id}`} key={index}>
                   <h2>{exDir.name}</h2>
               </Link>
             </>
             ));
         }else{
            return
         }
            
    console.log('program data', programData)
  }

function getTeamMembers(programData){
    if(programData.members){
        let teamMemberJSX = programData.members.map((member, index)=>{
            return <div>
                <h4>{member}</h4>
            </div>
        })
        return teamMemberJSX

    }else{
        return
    }
}
  return (
    <div>
        <h1>Team Name:</h1>
        <h1>{programData.name}</h1>
        <h2>{getTeamMembers(programData)}</h2>
        <h2>Experiment Directories</h2>
        <h4>{generateExDirList(programData)}</h4>
        <div>
        <Link to={`/programs/${programId}/${teamId}/create`}>
          Add a new experiment directory
      </Link>
        </div>
    </div>
  );
}

export default Team;

import { program } from "@babel/types";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";

const url = 'http://localhost:4000/api/programs';
function ExDir(props) {
    const programId = props.match.params.programId
    const teamId = props.match.params.teamId
    const exDirId = props.match.params.exDir
    const [programData, setProgramData] = useState({});
  
  
  // takes in a callback function as first required argument
  useEffect(function(){
      console.log('useEffect was called');
    //   fetchProgramData() 
      fetch(`${url}/${programId}/${teamId}/${exDirId}`)
            .then((response)=> response.json())
            .then((data)=>{
                setProgramData(data)
            })
            .catch((err)=>{
                console.log(err)
            })
    
      return console.log('runs on unmount', programData)

  }, [programId, teamId, exDirId])
  


     function generateExperimentList(programData) {
         if(programData.experiments){
             console.log(programData.experiments)
             
                 return programData.experiments.map((experiment, index) => (
               <>
               <Link to={`/programs/${props.match.params.programId}/${props.match.params.teamId}/${props.match.params.exDirId}/${experiment._id}`} key={index}>
                   <h2>{experiment.title}</h2>
               </Link>
             </>
             ));
         }else{
            return
         }
    console.log('program data', programData)
  }
  return (
    <div>
        <h1>{programData.title}</h1>
        {/* <h2>{getTeamMembers(programData)}</h2> */}
        <h2>Experiments</h2>
        <h4>{generateExperimentList(programData)}</h4>
        <div>
            
        </div>
    </div>
  );
}

export default ExDir;

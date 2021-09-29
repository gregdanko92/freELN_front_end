import { program } from "@babel/types";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";
import parse from 'html-react-parser'
import NavTeam from "../components/NavTeam";
import Header from "../components/Header";

const url = 'http://localhost:4000/api/programs';
function Team(props) {
    const programId = props.match.params.programId
    const teamId = props.match.params.teamId
    const [programData, setProgramData] = useState({});
  
  
  // takes in a callback function as first required argument
  useEffect(function(){
      console.log('useEffect was called in TeamJSX');
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
    console.log(programData.text)
      return console.log('runs on unmount', programData)

  },[programId, teamId] )
//[programId, teamId, ]
 
  return (
    <div>
      <div className='header-nav-projects'>
        <Header/>
        <NavTeam/>
      </div>
      <div className='teams-show'>
        <div className='project-directories-headline'>
          <h3>{programData.name}</h3>
          </div>

          <div className='project-details'>
            
          </div>

      <div className='experiment-directories-main'>
        {/* <h4>Description: {programData.content}</h4> */}
        <div>{parse(String(programData.text))}</div>

        <div>
        <h4>Files</h4>
        <Link to={programData.file}>{programData.file}</Link>
      
        <h4>Experiment performed on {programData.date}</h4>
        

        <Link className="add-a-project-button
        " to={`/programs/${programId}/${teamId}/edit`}>
          Edit
      </Link>
      </div>

      </div>
        
      </div>

    </div>
  );
}

export default Team;

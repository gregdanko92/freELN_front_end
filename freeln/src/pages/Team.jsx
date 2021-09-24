import { program } from "@babel/types";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";
import parse from 'html-react-parser'

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
        <h1>{programData.name}</h1>
        <h4>{programData.date}</h4>
        <p>{programData.content}</p>
        <Link to={programData.file}>{programData.file}</Link>
        <div>{parse(String(programData.text))}</div>
        <div>
        <Link to={`/programs/${programId}/${teamId}/edit`}>
          Edit
      </Link>
      </div>
        

    </div>
  );
}

export default Team;

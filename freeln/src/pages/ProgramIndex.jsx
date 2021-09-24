import { program } from "@babel/types";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'

// import Program from "../components/Program";

function ProgramIndex(props) {
  const [programs, setPrograms] = useState([]);
  const programId = props.match.params.programId
  const teamId = props.match.params.teamId
  
  // takes in a callback function as first required argument
  useEffect(function(){
      console.log('useEffect was called');
      fetchPrograms() //added this function, so that the games render when the page renders, not waiting for the button
      return console.log('runs on unmount')

  }, [])
  
  function fetchPrograms(){
    
    ProgramModel.all().then((data) => {
      setPrograms(data)
    })

  }
  function handleDelete(id){
   const newPrograms = programs.filter((program)=>program._id !==id)
   setPrograms(newPrograms)
   console.log('delete clicked')
   console.log(id)
   axios.delete(`http://localhost:4000/api/programs/${id}`)
  }


  
  function generateList(programs) {
    return programs.map((program, index) => (
      <>
      <Link to={`/programs/${program._id}`} key={index}>
          <h2>{program.name}</h2>
      </Link>
        <h3>{program.target}</h3>
        <button
            onClick={()=>handleDelete(program._id)}>Delete</button>
    </>
        // <ul>
            
        //     <h3>{program.target}</h3>
        //     <p>{program._id}</p>
        // </ul>

    ));
  }
  
  return (
    <div>
      <h1>All Projects</h1>
      <h2>{ programs.length }</h2>
      {programs.length ? generateList(programs) : "Create a Program to get started"}
      <br/>
      <Link to={`/programs/create`}>
          Add a new Program
      </Link>
      
       
    </div>
  );
}

export default ProgramIndex;

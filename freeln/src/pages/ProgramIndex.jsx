import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";

function ProgramIndex(props) {
  const [programs, setPrograms] = useState([]);
  
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
  
  function generateList(programs) {
    return programs.map((program, index) => (
      <>
      <Link to={`/programs/${program._id}`} key={index}>
          <h2>{program.name}</h2>
      </Link>
            <h3>{program.target}</h3>
    </>
        // <ul>
            
        //     <h3>{program.target}</h3>
        //     <p>{program._id}</p>
        // </ul>

    ));
  }
  
  return (
    <div>
      <h1>All Programs</h1>
      <h2>{ programs.length }</h2>
      {programs.length ? generateList(programs) : "Create a Program to get started"}
     
    </div>
  );
}

export default ProgramIndex;

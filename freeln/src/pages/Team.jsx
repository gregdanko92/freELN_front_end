import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";

function Team(props) {
  const [exDirs, setExDirs] = useState([]);
  
  // takes in a callback function as first required argument
  useEffect(function(){
      console.log('useEffect was called');
      fetchExDirs() //added this function, so that the games render when the page renders, not waiting for the button
      return console.log('runs on unmount')

  }, [])
  
  function fetchExDirs(){
    
    ProgramModel.all().then((data) => {
      setExDirs(data)
    })

  }
  
  function generateExDirsList(exDirs) {
    return exDirs.map((exDir, index) => (
      <>
      <Link to={`/programs/${props.match.params.programId}/${props.match.params.teamId}/${exDir._id}`} key={index}>
          <h2>{exDir.name}</h2>
      </Link>
            <h3>{exDir.target}</h3>
    </>
        // <ul>
            
        //     <h3>{program.target}</h3>
        //     <p>{program._id}</p>
        // </ul>

    ));
  }
  
  return (
    <div>
      <h1>All Teams</h1>
      <h2>{ exDirs.length }</h2>
      <h2>
            {generateExDirsList(exDirs)} 
        </h2>
     
    </div>
  );
}

export default Team;

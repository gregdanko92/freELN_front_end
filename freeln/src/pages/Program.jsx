import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
// import Program from "../components/Program";

function Program(props) {
  const [teams, setTeams] = useState([]);
  
  // takes in a callback function as first required argument
  useEffect(function(){
      console.log('useEffect was called');
      fetchTeams() //added this function, so that the games render when the page renders, not waiting for the button
      return console.log('runs on unmount')

  }, [])
  
  function fetchTeams(){
    
    ProgramModel.all().then((data) => {
      setTeams(data)
    })

  }
  
  function generateTeamsList(teams) {
    return teams.map((team, index) => (
      <>
      <Link to={`/programs/${props.match.params.programId}/${team._id}`} key={index}>
          <h2>{team.name}</h2>
      </Link>
            
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
      <h2>{ teams.length }</h2>
      <h2>
            {generateTeamsList(teams)} 
        </h2>
     
    </div>
  );
}

export default Program;

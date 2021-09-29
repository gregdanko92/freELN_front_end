import { program } from "@babel/types";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProgramModel from '../models/ProgramModel'
import Header from '../components/Header'
import NavProgram from "../components/NavProgram";



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
   window.location.reload(false);
  }


  
  function generateList(programs) {
    
    return programs.map((program, index) => (
      
      <Link class='project-directories-main-child'to={`/programs/${program._id}`} key={index}>
        <div className='folder-delete'>
          
          <img className='folder-icon' src="https://img.icons8.com/ios-filled/50/000000/folder-invoices--v2.png"/>
          
          <button className='project-directories-delete-button'
              onClick={()=>handleDelete(program._id)}>
                <img src="https://img.icons8.com/ios/50/000000/close-window.png"/>
          </button>
          
        </div>
        <div className='title-date'>

          <div className='project-title'>
            {program.name}
          </div>

            <div className='project-date'>
              {program.date}
            </div>

        </div>



            <div className='project-description'>
              {program.description}
            </div>

            <br />

          
      </Link>

    ));
  }
  
  return (
    <div>
      <div className='header-nav-projects'>
        <Header/>
        <NavProgram/>
      </div>
      <div className='project-directories'>
          <div className='project-directories-headline'>
          Project Directories
          </div>

        <Link className='add-a-project-button'to={`/programs/create`}>
            Create a new project 
        </Link>
        

        <div className='project-directories-main'>
          {programs? generateList(programs) : "Create a Project to get started"}
          {/* {generateList(programs)} */}
        </div>


        
      </div>
    </div>
  );
}

export default ProgramIndex;

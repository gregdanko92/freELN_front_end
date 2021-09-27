import React from 'react'
import { Link } from 'react-router-dom'

function NavTeam(props){

    return(
        <div className='nav-div'>
            <Link to={`/`} >Home</Link>
            <br />
            <Link to={`/programs/${props.programId}`} >This Project</Link>
            <br />
            <Link to='/programs'>All Projects</Link>
        </div>
    )

}

export default NavTeam
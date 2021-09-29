import React from 'react'
import { Link } from 'react-router-dom'

function NavProgram(props){

    return(
        <div className='nav-div'>
            
            <Link className='nav-div-link' to='/'>Home</Link>
            <br />
            <Link className='nav-div-link' to='/programs'>All Projects</Link>
        </div>
    )

}

export default NavProgram
import React from 'react'
import {Link} from 'react-router-dom'

function HomePage(){
    return (
        <div className='homepage'>

            <div className='homepage-headline'>f r e E L N</div>
            <div className='homepage-sub-headline'>the free electronic lab notebook resource</div>
            <div className= 'homepage-main'>
                    <Link className='homepage-main-child' to='/programs'>  
                        Projects   
                    </Link>

                    <Link className='homepage-main-child' to='/'>
                        Protocols
                    </Link>
            </div>
        </div>

        
        
    )
}

export default HomePage;
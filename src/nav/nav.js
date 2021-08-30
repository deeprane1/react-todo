import React from 'react'
import './nav.css'
import logo from '../assets/logo.svg'

function Navbar(props){
    return (
        <div id="nav"  >
            <div className='navItem'>
                <img alt='logo' src={logo} Style='width: 240px;height: auto;' />
            </div>

            <div className="navItem" Style="flex-grow: 2"> </div>

            <div className='navItem' Style="flex: 0 1 auto;padding: 0 1rem 0 1rem"> <p Style='font-size: 1.2rem'> Hello User </p> </div>
            
        </div>
    ) 
}

export default Navbar
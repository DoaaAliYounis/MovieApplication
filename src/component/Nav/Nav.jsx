import React from 'react'
import './Nav.css'
import Home from "../../assets/global-home-bg-comp.png"
const Nav = () => {
  return (
    <div>
       <div className="landing-page">
        <img src={Home} alt="" className='blur contrat'/>
          <div className="overlay"></div>
        
        <div className='landing-header'>
            <p>Welcome to Movies</p>
            <h1>WATCH FILMS , TELEVISION & GAMES</h1>
            <button>WATCH NOW</button>
        
        
        </div>
    
    
    
    </div>
    </div>
  )
}

export default Nav

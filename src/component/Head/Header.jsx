import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faUser , faVideo , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
const navgaite= useNavigate()
 const handler=()=>{
    navgaite('/Search')
 
 }

  return (
    <>
    <div className="Head">
            <div className="links">
                <ul>
                    <li><Link to='/'><a href="">Home</a></Link></li>
                    <li><Link to='/Show'><a href="">TV Shows</a></Link></li>
                    <li><Link to='/Movies'><a href="">Movies</a></Link></li>
                    <li><Link to='/Trend'><a href="">Trending</a></Link></li>
                </ul>
            
            </div>
            <div className="logo">
                <div className='logo-img'>
                <FontAwesomeIcon icon={faVideo} className='icons'/>
                </div>
                <div className='logo-title'>
                <h2>Movies</h2>
                </div>

            </div>
            <div className="login-in">
                <div className='Search'>
                <input type="text"  onClick={handler} className='input-icon' placeholder='   search ...'/>
                </div>
                <div>
                <div className="log">
                    <li><Link to='/login'><a href="/login">login</a></Link></li>
                    <FontAwesomeIcon icon= {faUser} className='icon-login'/>
                    </div>
                </div>
            </div>  
    </div>
   
    </>
  )
}

export default Header

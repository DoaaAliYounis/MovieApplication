import React from 'react'
import './Foot.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faClapperboard , faHeart , faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const Foot = () => {
  return (
    <div>
    <div className='Foot-part'>
        <div className="over-foot"></div>
        <div className="footer-content">
            <h2>Movies</h2>
            <ul>
                <li><Link to='/'><a href="">Home</a></Link></li>
                <li><Link to='/Show'><a href="">TV Shows</a></Link></li>
                <li><Link to='/Movies'><a href="">Movies</a></Link></li>
                <li><Link to='/Trend'><a href="">Trending</a></Link></li>
            </ul>
            <div className="icon">
                <FontAwesomeIcon icon={faClapperboard} className='icon-one' />
                <FontAwesomeIcon icon={faHeart} className='icon-one' />
                <FontAwesomeIcon icon={faThumbsUp}  className='icon-one' />
        
            </div>
            <p className='para'>This page is giving you all the access to watch Movies with all the authentication for it. Just enjoy watch Movies on it and Have Fun with your Friends.</p>
        
        
        </div>
    
    
    
    </div>
</div>
  )
}

export default Foot

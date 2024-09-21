import React from 'react'
import './Show.css'
import Header from '../../component/Head/Header'
import Footer from '../../component/Footer/Footer'
import MoviesPHoto from '../../assets/show.jpeg'
import { useState , useEffect } from 'react'
import { NavLink} from 'react-router-dom'
const Show = () => {
    const[shows , setShows] =useState([])
    const showsTV=()=>{
      fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=dfa40d4ebbf1186379a2c7c73c3c02a7')
      .then (res=>res.json())
      .then(json=>setShows(json.results))
      .catch(err=>console.log(err))
      
  }
  useEffect(()=>{
    showsTV()
  },[])



  return (
    <div>
          <Header/>
          <div className='Movies-landing'>
              <img className='landing-photo' src={MoviesPHoto} alt="" />
                <div className="overlay"></div>
                <div className="container">
                    <div className="div-one">
                      <h1>Tv Shows....</h1>
                      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
                      <button><a href="#Card">PLAY NOW</a></button>
                    </div>
               
                </div>
          
            </div>
            <div className="Movie-area" id='Card'>
              <div className="container">
                <h2>TV SHOWS</h2>
                  <div className="Movies-cards">
                    {shows.map((Tvs)=>{
                       return <div className='Cardd' key={Tvs.id}>
                          <div className="img">
                          <img className="imgs" src={`https://image.tmdb.org/t/p/w500${Tvs.poster_path}`} alt="" />
                          </div>
                          <p><NavLink to={`/body/${Tvs.id}`}>{Tvs.original_name}</NavLink></p>
                          <h5>Rank: {Tvs.vote_average}</h5>

                        </div>
                    
                    })}
                  
                  
                  </div>
              
              
              
              
              
              </div>
            </div>
          
          
          
          <Footer/>
      
    </div>
  )
}

export default Show

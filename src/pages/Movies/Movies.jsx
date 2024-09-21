import React from 'react'
import Header from '../../component/Head/Header'
import Footer from '../../component/Footer/Footer'
import MoviesPHoto from '../../assets/movies.jpeg'
import { useState , useEffect } from 'react'
import './Movies.css'
import { NavLink} from 'react-router-dom'
const Movies = () => {
  const[films , setFilms] =useState([])
  const getFilms=()=>{
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=dfa40d4ebbf1186379a2c7c73c3c02a7')
    .then (res=>res.json())
    .then(json=>setFilms(json.results))
    .catch(err=>console.log(err))
    
}
useEffect(()=>{
  getFilms()
},[])



  return (
    <div>
          <Header/>
            <div className='Movies-landing'>
              <img className='landing-photo' src={MoviesPHoto} alt="" />
                <div className="overlay"></div>
                <div className="container">
                    <div className="div-one">
                      <h1>WELCOME.</h1>
                      <h3>UPCOMING MOVIES....</h3>
                      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
                      <button><a href="#Card">PLAY NOW</a></button>
                    </div>
               
                </div>
          
            </div>
        
        
            <div className="Movie-area" id='Card'>
              <div className="container">
                <h2>TOP MOVIES</h2>
                  <div className="Movies-cards">
                    {films.map((item)=>{
                       return <div className='Cardd'>
                          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                          <p><NavLink to={`/body/${item.id}`}>{item.title}</NavLink></p>
                          <h5>Rank: {item.vote_average}</h5>
                        
                        </div>
                      
                    
                    
                    })}
                  
                  </div>
             
              </div>
            </div>
          
          <Footer/>
    </div>
  )
}

export default Movies

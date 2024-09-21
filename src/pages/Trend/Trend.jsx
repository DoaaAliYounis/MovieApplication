import React from 'react'
import './Trend.css'
import Header from '../../component/Head/Header'
import Footer from '../../component/Footer/Footer'
import MoviesPHoto from '../../assets/trend1.jpeg'
import Movies2  from '../../assets/trend2.jpeg'
import Movies3 from'../../assets/trend3.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import { useState , useEffect } from 'react'
import { NavLink} from 'react-router-dom'
const Trend = () => {
  const[films , setFilms] =useState([])
  const getFilms=()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=dfa40d4ebbf1186379a2c7c73c3c02a7')
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
            <div className='Head-cas'>
      
              <Carousel className='full'> 
             <Carousel.Item className='cor'> 
          <img 
            className="d-block w-100"
            src={MoviesPHoto}
            alt="Image One"
          /> 
          <Carousel.Caption className='head-title'> 
            <h2>The Fall Guy</h2> 
            <p>A down-and-out stuntman must find the missing star of his ex-girlfriend's blockbuster film.</p> 
            <button className='one'>Watch</button>
            <button className='two'>ADD LIST</button>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item  className='cor'> 
          <img 
            className="d-block w-100"
            src={ Movies2 }
            alt="Image Two"
          /> 
          <Carousel.Caption className='head-title'> 
            <h2>Mad Max: Fury Road</h2> 
            <p>After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.</p> 
            <button className='one'>Watch</button>
            <button className='two'>ADD LIST</button>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item className='cor'>  
          <img 
            className="d-block w-100"
            src={Movies3}
            alt="Image Two"
          /> 
          <Carousel.Caption className='head-title'> 
            <h2>The Bikeriders </h2> 
            <p>After a chance encounter, headstrong Kathy is drawn to Benny, member of Midwestern motorcycle club the Vandals. As the club transforms into a dangerous underworld of violence, Benny must choose between Kathy and his loyalty to the club.</p> 
            <button className='one'>Watch</button>
            <button className='two'>ADD LIST</button>
          </Carousel.Caption> 
        </Carousel.Item > 
      </Carousel> 
    </div> 
                  
                
            <div className="Movie-area" >
              <div className="container">
                <h2>Trend Movies</h2>
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

export default Trend

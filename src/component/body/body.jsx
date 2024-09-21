import React, { useRef } from 'react'
import './body.css'
import { useEffect, useState } from "react"
import partOne from '../../assets/anime.jpg'
import partTwo from '../../assets/batman.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import partThree from '../../assets/hom3.jpg'
import Four from '../../assets/Queen.jpg'
import Five from '../../assets/Office.jpg'
import Carousel from 'react-bootstrap/Carousel';

const Body = () => {
        const cardsRef = useRef();
        const CardsRef2=useRef()
        const CardsRef3=useRef()
        const handleWheel=(event)=>{
            event.preventDefault();    
            cardsRef.current.scrollLeft += event.deltaY;
        }
        const handleWheel2=(event)=>{
            event.preventDefault();    
            CardsRef2.current.scrollLeft += event.deltaY;
        }
        const handleWheel3=(event)=>{
            event.preventDefault();    
            CardsRef3.current.scrollLeft += event.deltaY;
        }
        
        useEffect(()=>{
            cardsRef.current.addEventListener('wheel' , handleWheel);
        
        },[])
        useEffect(()=>{
            CardsRef2.current.addEventListener('wheel' , handleWheel2);
        
        },[])
        useEffect(()=>{
            CardsRef3.current.addEventListener('wheel' , handleWheel3);
        
        },[])
    
    const[movielist , setMovielist]=useState([])
    const[trendList,setTrendList]=useState([])
    const[upcoming, setUpcoming]=useState([])
    const getMovie=()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=dfa40d4ebbf1186379a2c7c73c3c02a7',
        )
        .then (res=>res.json())
        .then(json=>setMovielist(json.results))
        .catch(err=>console.error(err))
        
    }
    useEffect(()=>{
        getMovie()
    },[])
    
    const getTrend=()=>{
        fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=dfa40d4ebbf1186379a2c7c73c3c02a7'
  )
        .then (res=>res.json())
        .then(json=>setTrendList(json.results))
        .catch(err=>console.error(err))
        
    }
    useEffect(()=>{
        getTrend()
    },[])
    
    const upComing=()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=dfa40d4ebbf1186379a2c7c73c3c02a7')
        .then (res=>res.json())
        .then(json=>setUpcoming(json.results))
        .catch(err=>console.log(err))
        
    }
    useEffect(()=>{
        upComing()
    },[])
  

  
  
  return (
        <div className='parent'> 
            <div className="parent-over"></div>
            <div className="container">
            <h2 className='h2-main'>Top Movies</h2>
             </div>
            <div className='secound-api' ref={cardsRef}>
                { movielist ? movielist.map((film )=>{

                    return <div className='fetch-top' key={film.id} >
                       <img  className="image dark-one" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} /> 
                        
                        <div className="title-movies">
                            <h3 ><NavLink to={`/body/${film.id}`}>{film.title}</NavLink></h3>
                            <small>Rank : {film.vote_average}</small>
                            <br />
                            <small>Date : {film.release_date}</small>
                            <button className='blue'>See More</button>
                        </div>
                      
                    </div>
                
                }) :null}
            
            
            
            </div>
            
            <div className="container">
            <h2 className='h2-main'>TV SHOWS</h2>
             </div>
            <div className='top-api secound-api' ref={CardsRef2} >
                { trendList ?trendList.map((film)=>{
                    return <div key={film.id} className='fetch-top' >
                       <img  className="image dark-one" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} /> 
                       
                        <div className="title-movies">
                        <h3><NavLink to={`/body/${film.id}`}>{film.name}</NavLink></h3>
                         <small>average :{film.vote_average}</small>
                         <br />
                         <button className='blue'>See More</button>
                        </div>
                    </div>
                
                }) :null}
            
            
            
            </div>
            
            <div className="container">
            <h2 className='h2-main'>Upcomig Movies</h2>
             </div>
            <div className='top-api secound-api third-api' ref={CardsRef3}>
                
                {upcoming ? upcoming.map((film)=>{
                    return <div key={film.id} className='fetch-top'>
                       <img className="image dark-one" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} /> 
                      
                        <div className="title-movies">
                            <h3 ><NavLink to={`/body/${film.id}`}>{film.title}</NavLink></h3>
                            <small>Rank :{film.vote_average}</small>
                            <br />
                            <small>Date :{film.release_date}+</small>
                            <button className='blue'>See More</button>
                        </div>
                    </div>
                
                }) :null}
            
            
            
            </div>
            
            
            <div className="animaton">
                <div className="animation-big">
                    <div className="animation-small talking">
                        <div className="talk">
                        <h2>illustration ,Anime&Manges</h2>
                        <p>
Anime is a diverse medium with distinctive production methods that have adapted in response to emergent technologies.</p>
                    </div>
                    
                    </div>
                    <div className="animation-small photo">
                        <img src={partOne} alt="" className='photo'/>
                        <div className="over-one"></div>
                    </div>
                
                
                </div>
            
            
            </div>
            
            <div className="animaton">
                <div className="animation-big">
                    <div className="animation-small photo">
                        <img src={partTwo} alt="" className='photo Two'/>
                        <div className="over-two"></div>
                    </div>
                    <div className="animation-small talking">
                        <div className="talk ">
                        <h2>DANGEROUS, WAR MOVIES</h2>
                        <p>
                            Anime is a diverse medium with distinctive production methods that have adapted in response to emergent technologies.</p>
                    </div>
                    
                    </div>
                
                
                </div>
            
            
            </div>
           
           <div className="part-five">
            <div className="bri">
            
                    <Carousel className='caro'>
                          <Carousel.Item>
                          <img src={Five} alt="" />
                          <Carousel.Caption className='caro-title'> 
                            <h2>How to Get Away With Murder</h2> 
                            <p>Brilliant criminal defense attorney and law professor Annalise Keating, plus five of her students, become involved in a twisted murder case.</p> 
                          </Carousel.Caption> 
                          </Carousel.Item>
                          <Carousel.Item >
                          <img src={partThree} alt="" />
                          <Carousel.Caption className='caro-title'> 
                            <h2>Inventing Anna</h2> 
                            <p>Audacious entrepreneur or con artist? A journalist chases down the story of Anna Delvey, who convinced New York's elite she was a German heiress.</p> 
                           
                          </Carousel.Caption> 
                          </Carousel.Item>
                          <Carousel.Item>
                          <img src={Four} alt="" />
                          <Carousel.Caption className='caro-title'> 
                            <h2>Queen Charlotte: A Bridgerton Story</h2> 
                            <p>Young Queen Charlotte's marriage to King George of England sparks an epic love story and transforms high society in this "Bridgerton" universe prequel.</p> 
                          </Carousel.Caption> 
                          </Carousel.Item>
                        </Carousel>
    
    
    
                </div>
             
                </div>
        </div>
 
  )
  
}
export default Body

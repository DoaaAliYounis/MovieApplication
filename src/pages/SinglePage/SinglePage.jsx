
import React, { useRef } from 'react'
import './SinglePage.css';
import { useState , useEffect } from 'react';
import Header from '../../component/Head/Header';
import {NavLink, useParams } from 'react-router-dom';
import fried from '../../assets/fried.webp'
import Breaking from '../../assets/Breaking.webp'
import Black from '../../assets/Black and white.webp'
import arcane from '../../assets/arcane.webp'
import magic from '../../assets/magic.webp'
import old from '../../assets/old.webp'
import Footer from '../../component/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay , faXmark} from '@fortawesome/free-solid-svg-icons'
import video1 from '../../assets/video1.jpeg'
import video2 from '../../assets/video2.jpeg'
import video3 from '../../assets/video3.jpeg'



const SinglePage = () => {
  const [boot ,setBoot] = useState(false)
  const [boot2 ,setBootTwo] = useState(false)
  const [boot3 ,setBootThree] = useState(false)
  const toggleModal=()=>{
    setBoot(!boot)
    document.body.classList.toggle('show-video')
  }
  const toggleModalTwo=()=>{
    setBootTwo(!boot2)
    document.body.classList.toggle('show-video')
  }
  const toggleModalThree=()=>{
    setBootThree(!boot3)
    document.body.classList.toggle('show-video')
  }
  if (boot){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  if (boot2){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  if (boot3){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  const cardsRef = useRef();
  const handleWheel=(event)=>{
    event.preventDefault();    
    cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  cardsRef.current.addEventListener('wheel' , handleWheel);

},[]);
const[movielist , setMovielist]=useState([]);
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

    const {id}= useParams();
    const [film , setFilm]=useState([]);
    const [loading , setLoading] =useState(false);
    useEffect(()=>{
      const getFilm= async()=>{
          setLoading(true);
          const response = await fetch(`https:api.themoviedb.org/3/movie/${id}?api_key=dfa40d4ebbf1186379a2c7c73c3c02a7`
          );
          setFilm(await response.json());
          setLoading(false);
          console.log(film);
      
      }
      getFilm();
    
    },[])
    
    const Loading=()=>{
          return(
            <>
                loading......
            
            </>
          
          )
  
    }
    const ShowFilm=()=>{
            return (
              <>
                
                <div className="col-md-6 left boxs">
                <img  className="box-img" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} /> 
                
                </div>  
                <div className="col-md-6 right boxs">
                  <div className="tal">
                    <h1 className='title'>{film.title}</h1>
                    <p className='overview'>{film.overview}</p>
                    <p className='overview'>Release Date : {film.release_date}</p>
                    <span className='red'>TMBD :</span> <span className='overview'>{film.vote_average}</span>
                  </div>
                  
                </div>
              </>
            
            )
          
    
    }
    

  return (
    <div>   
            <Header/>
              <div className="main-head">
                <div className="main-image">
                  <img  src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt="" />
                
                
                </div>
                <div className="overlay"></div>
              
              <div className="container main-content ">
                <div className="row">
                  {loading ? <Loading/> : <ShowFilm/>}
              
              
              </div>
                
                </div>
              
              </div>
          <div className="sec-head">
              <div className="container">
              <h2 className='More'>More like</h2>
              <div className='secound-api' ref={cardsRef}>
                { movielist ? movielist.map((film )=>{

                    return <div className='fetch-top' key={film.id} >
                       <img  className="image" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} /> 
                        
                        <div className="title-movies">
                            <h3 ><NavLink to={`/body/${film.id}`}>{film.title}</NavLink></h3>
                        </div>
                    </div>
                
                }) :null}
            
            
            
            </div>
              
              </div>
          
          
          </div>
          
          <div className="photos">
          <div className="container">
          <h2 className='More'>Collection</h2>
              <div className="photo-collection">
                  <div className="collce">
                    <img src={fried} alt="" />
                  </div>
                  <div className="collce">
                  <img src={Breaking} alt="" />
                  </div>
                  <div className="collce">
                  <img src={Black} alt="" />
                  </div>
                  <div className="collce">
                  <img src={arcane} alt="" />
                  </div>
                  <div className="collce">
                  <img src={magic} alt="" />
                  </div>
                  <div className="collce">
                  <img src={old} alt="" />
                  </div>
              
              
                 </div>
              </div>
          </div>
          
          <div className="videos">
          <div className="container">
          <h2 className='More'>Videos</h2>
          {boot && (
               <div className="videos">
                <div className="hidden" onClick={toggleModal}></div>
                    <div className="hidden-content">
                    <iframe  src="https://www.youtube.com/embed/LEjhY15eCx0?si=JgJrTsYTE36PG-w8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      
                    <button className="close-modal" onClick={toggleModal}>
                    <FontAwesomeIcon icon={faXmark} className='close'/>
                    </button>
                    </div>
                  
                  
              
              
              </div>
             
             
             )}
                     {boot2 && (
               <div className="videos">
                <div className="hidden" onClick={toggleModalTwo}></div>
                    <div className="hidden-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rYzIOBwyhIU?si=A-OEu8GrEhd6HLDV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                      
                    <button className="close-modal" onClick={toggleModalTwo} >
                    <FontAwesomeIcon icon={faXmark} className='close'/>
                    </button>
                    </div>
                  
                  
              
              
              </div>
              
            )}
                  {boot3 && (
               <div className="videos">
                <div className="hidden" onClick={toggleModalThree}></div>
                    <div className="hidden-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AkcfB3z0_-0?si=SDEl9hW2MKQN-xPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                      
                    <button className="close-modal" onClick={toggleModalThree}>
                    <FontAwesomeIcon icon={faXmark} className='close'/>
                    </button>
                    </div>
                  
                  
              
              
              </div>
              
            )}
            <div className="vio">
            
            <div className="vio-parts top">
              <img src={video1}  className='play'/>
                <div className="over-play"></div>
                <button onClick={toggleModal} className='center'><FontAwesomeIcon icon={faPlay} /></button>
              

        
          </div>
          
          <div className="vio-parts bottom">
              <div className="video-seme">
              <img src={video2} alt="" className='play'/>
              <div className="over-play"></div>
              <button onClick={toggleModalTwo} className='center'><FontAwesomeIcon icon={faPlay} /></button>
     
            </div>
              <div className="video-seme">
              <img src={video3} alt="" className='play'/>
              <div className="over-play"></div>
              <button onClick={toggleModalThree} className='center'><FontAwesomeIcon icon={faPlay} /></button>
      
              </div>
          </div>
          
          
          </div>
          
          </div>
          </div>
          
          
          
          
          
          
          
          <Footer/>
          
          
    </div>
    
    
  )
}

export default SinglePage

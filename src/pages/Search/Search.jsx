import Foot from '../../component/Footer2/Foot'
import{ useEffect, useState } from 'react'
import Header from '../../component/Head/Header'
import {NavLink } from 'react-router-dom';
import './Search.css'
const Search = () => {
     const [endPoint, setEndPoint] = useState('');
    const [container , setContainer] = useState([]);
    const [finalPoint , setFinalPoint]= useState('');
    

    const fetchMe=()=>{
        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`,{
        "method": 'GET',
        "headers": {
		'X-RapidAPI-Key': '5b91431bd2msh1f75bb559ae0de6p19ca7djsn7fd1cee55289',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		
	}
    })
        .then (res=> {
         return res.json()
        })
        .then(data=>setContainer(data.d))
        .catch(res=>console.error(res))
        
    };
    useEffect(()=>{
        fetchMe();
    },[finalPoint])
    
    
    const onChangeHandler=(e)=>{
    
        setEndPoint(e.target.value)
    }
    const SubmitHandler=(event)=>{
        event.preventDefault()
        setFinalPoint(endPoint)
    }

  return (
  <>
    <Header/>
      <div className='app'>
      <div className="app-over"></div>
        <form  onSubmit={SubmitHandler}>
            <input className='searchinp'type="text"  value={endPoint} onChange={onChangeHandler}/>
            <button className='Search-btn'type='submit'>Sumbit</button>
        </form>
        <div className="result">
        {container.slice(0,4).map((item , index)=>{
           return <div key={index}>
             <div className="cards">
             <div className="images">
             <img src={item.i.imageUrl} alt="" className='ig'/>
             </div>
             <p className='p-Search'><NavLink to={`/body/${item.id}`}>{item.l}</NavLink></p>
             
             </div>
           </div> 
        
        })
        
        }
        </div>
     
        </div>
        <Foot/>
        </>
    )
  
}

export default Search

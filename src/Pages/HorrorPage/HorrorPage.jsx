import React, { useEffect, useState } from 'react'
import './HorrorPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import {Link} from 'react-router-dom';
import axios from 'axios'
const HorrorPage = () => {
    const [hr,setHrMovies] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&query=horror&page=1&include_adult=false`).then((response)=>{
             setHrMovies(response.data.results);
        })
    },[])
    return (
    <div className='Hr_wrapper'>
        <Navbar></Navbar>
        <div className='Hr_container'>
            <div className='Hr_movies'>
                {hr.map((item,id) => (
                     <Link to={`/movie/${item?.id}`} style={{ textDecoration: 'none' }}>
                    <div className='Hr_movie'>
                      <img  className="Hr_Poster"src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}></img>
                      <div className='Hr_title'>
                          {item.title}
                      </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HorrorPage
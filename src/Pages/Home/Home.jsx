import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../../Components/Main/Main'
import Row from '../../Components/Row/Row'
import './Home.css'
const Home = () => {
  return (
    <div className='Home_container'>
     <Navbar></Navbar>
     <Main></Main>
     <Row title="Up coming" fetchURL={`https://api.themoviedb.org/3/movie/upcoming?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&page=1`}></Row>
     <Row title='Trending' fetchURL={`https://api.themoviedb.org/3/movie/popular?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&page=2`}/>
     <Row title="top rated" fetchURL={`https://api.themoviedb.org/3/movie/top_rated?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&page=1`}></Row>
    </div>
  )
}

export default Home
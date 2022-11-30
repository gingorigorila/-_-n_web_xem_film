import React, {useEffect, useState} from "react"
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar'
import "./MovieDetailPage.css"
import YouTube from "react-youtube";
import { useParams } from "react-router-dom"
import movieTrailer from "movie-trailer";
const MovieDetailPage = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()
    const [trailerUrl, setTrailerUrl]=useState("")

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US`).then((response)=>{
           setMovie(response.data) 
           console.log(response.data)
    })
    }, [])

    const handleTrailer = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("")
        }else {
              movieTrailer(movie?.title || "")
              .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url)
                .search);
                setTrailerUrl(urlParams.get("v"));   
                })
              .catch((error)=>console.log(error));
        }
    }

    const opts = {
        height:"390",
        width: "100%",
        playerVar:{
            autoplay: 1
        },
    };

    return (
        <>
        <Navbar></Navbar>
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original/${currentMovieDetail?.backdrop_path}`} alt={currentMovieDetail?.title} />
                {/* {console.log(currentMovieDetail?.title)} */}
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original/${currentMovieDetail ?.poster_path}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ?.original_title}</div>
                        <div className="movie__tagline">{currentMovieDetail ?.tagline}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ?.vote_average} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ?.runtime + " mins"}</div>
                        <div className="movie__releaseDate">{ "Release date: "+ currentMovieDetail ?.release_date}</div>
                        <div className="movie__genres">
                        {currentMovieDetail?.genres.map((genre,id) =>(
                             <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                          ))}
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div>{currentMovieDetail ?.overview}</div>
                    </div>
                    <div className="movie_trailer">
                        <button onClick={()=>handleTrailer(currentMovieDetail)}>
                          Play
                          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
                        </button>
                    </div>
                </div>
                {/* {console.log(currentMovieDetail)} */}
            </div>
        </div>
        </>
    )
}

export default MovieDetailPage
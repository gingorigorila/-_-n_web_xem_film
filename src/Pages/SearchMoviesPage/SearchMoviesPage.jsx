import React, {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './SearchMoviesPage.css'

const SearchMovies= () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    
    const SearchMovie = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&query=${search}&page=1&include_adult=false`;        
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    }

    
   
  return (
    <div className='page_wrapper'>
        <Navbar/>
        <form className="form" onSubmit={SearchMovie}>
            <input className="input" type="text" name="query"
                placeholder="Input movie's name"
                value={search} onChange={(e) => setSearch(e.target.value)}
            />
            <i class="fa regular fa-magnifying-glass"></i>
            <button className="button_sm" type="submit">Search</button>  
        </form>
        <div className='Movie_list'>
            
            {movies.filter(movie => movie?.poster_path).map(movie => (
               <div className="Movie_cards" key={movie.id} >
                    <img className="Movie_image"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title + ' poster'}
                    />
                    <div className="Movie_title">
                        {movie.title}
                    </div>
                </div>
            ))}

        </div>
    </div>
)
}

export default SearchMovies
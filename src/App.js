import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import MovieDetailPage from './Pages/MovieDetailPage/MovieDetailPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import HorrorPage from './Pages/HorrorPage/HorrorPage';
import ActionPage from './Pages/ActionPage/ActionPage';
import SearchMovies from './Pages/SearchMoviesPage/SearchMoviesPage';
import ComedyPage from './Pages/ComedyPage/ComedyPage';
function App() {
  return (
    <div className='App'>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="movie/:id" element={<MovieDetailPage/>}></Route>
      <Route path="/horrormovie" element={<HorrorPage/>}></Route>
      <Route path="/actionmovie" element={<ActionPage/>}></Route>
      <Route path="/searchmovie" element={<SearchMovies/>}></Route>
      <Route path="/comedymovie" element={<ComedyPage/>}></Route>
      <Route path ="/signin" element={<SignIn/>}></Route>
      <Route path ="/signup" element={<SignUp/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

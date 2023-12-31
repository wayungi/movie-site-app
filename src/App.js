import './App.css';
import Home from './components/Home';
import data from './data.json';
import {useState, useEffect} from 'react';
import Search from './components/Search';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [titleSearch, setTitleSearch] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  const searchMovie = async () => {
    const URL =  `http://www.omdbapi.com/?s=${titleSearch}s&apikey=fa994858`;
    const result = await fetch(URL);
    const resultJson = await result.json();
    if(resultJson) {
      setMovies(resultJson.Search);
    }
  }

  useEffect(() => {
    const result = searchMovie();  
  }, [titleSearch]);

  const addFavMovie = (movie) => {
    if (favMovies.includes(movie)) return
    const favouriteMovies = [...favMovies, movie];
    setFavMovies(favouriteMovies);
    saveToLocalStorage(favouriteMovies);
  }

  const removeFavMovie = (imdbID) => {
    const favMovieList = favMovies.filter((movie) => movie.imdbID !== imdbID);
    setFavMovies(favMovieList);
    saveToLocalStorage(favMovieList);
  }

  const saveToLocalStorage = (favouriteMovies) => {
    localStorage.setItem('react-app-favourite-movies', JSON.stringify(favouriteMovies));
  };

  useEffect(() => {
    const favouriteMovies = JSON.parse(localStorage.getItem('react-app-favourite-movies'));
    if (favouriteMovies) setFavMovies(favouriteMovies);
  }, []);

  return (
    <div className="app">
      <Search setTitleSearch={setTitleSearch}/>
      <Home movies={movies} favMovies={favMovies} addFavMovie={addFavMovie} removeFavMovie={removeFavMovie}/>
    </div>
  );
}

export default App;

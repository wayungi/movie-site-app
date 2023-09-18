import './App.css';
import Home from './components/Home';
import data from './data.json';
import {useState, useEffect} from 'react';
import Search from './components/Search';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [titleSearch, setTitleSearch] = useState('avenger');
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

  return (
    <div className="app">
      <Search setTitleSearch={setTitleSearch}/>
      <Home movies={movies} favMovies={favMovies}/>
    </div>
  );
}

export default App;

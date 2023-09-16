import './App.css';
import Home from './components/Home';
import data from './data.json';
import {useState, useEffect} from 'react';



const App = () => {

  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    const URL =  `http://www.omdbapi.com/?s=star wars&apikey=fa994858`;
    const result = await fetch(URL);
    const resultJson = await result.json();
    setMovies(resultJson.Search);
  }

  useEffect(() => {
    const result = searchMovie();  
  }, []);


  return (
    <div className="app">
      <Home movies={movies}/>
    </div>
  );
}

export default App;

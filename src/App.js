import './App.css';
import Home from './components/Home';
import data from './data.json';
import {useState} from 'react';



const App = () => {

  const [movies, setMovies] = useState(data.Search);
  
  console.log(movies)

  return (
    <div className="app">
      <Home movies={movies}/>
    </div>
  );
}

export default App;

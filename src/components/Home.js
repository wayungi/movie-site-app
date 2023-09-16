import {useState} from 'react';
import MovieList from './MovieList';
import data from '../data.json';

const Home = () => {

    const [movies, setMovies] = useState(data.Search);
    console.log(movies)

    return (
        <div>
            {<MovieList movies={movies}/>}
        </div>
    )
};


export default Home;




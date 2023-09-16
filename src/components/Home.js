import {useState} from 'react';
import data from '../data.json';


const Home = () => {

    const [movies, setMovies] = useState(data.Search);
    console.log(movies)

    return (
        <div>
            Movies
        </div>
    )
};


export default Home;




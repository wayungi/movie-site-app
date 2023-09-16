import MovieList from './MovieList';

const Home = ({movies}) => {

    return (
        <div>
            {<MovieList movies={movies}/>}
        </div>
    )
};


export default Home;




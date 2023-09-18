import MovieList from './MovieList';

const Home = ({movies, favMovies}) => {

    return (
        <div>
            <div>
                {<MovieList movies={movies}/>}
            </div>
            <h2>Favourite Movies</h2>

            <div>
                {<MovieList movies={favMovies} />}
            </div>
        </div>
        
    )
};


export default Home;




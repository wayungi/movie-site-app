import MovieList from './MovieList';

const Home = ({movies, favMovies, addFavMovie}) => {

    return (
        <div>
            <div>
                {<MovieList movies={movies} addFavMovie={addFavMovie}/>}
            </div>
            <h2>Favourite Movies</h2>

            <div>
                {<MovieList movies={favMovies} addFavMovie={addFavMovie} />}
            </div>
        </div>
        
    )
};


export default Home;




import MovieList from './MovieList';
import FavouriteButton from "./FavouriteButton";


const Home = ({movies, favMovies, addFavMovie, removeFavMovie}) => {

    return (
        <div>
            <div>
                {<MovieList movies={movies} addFavMovie={addFavMovie} FavouriteButton={FavouriteButton}/>}
            </div>
            <h2>Favourite Movies</h2>

            <div>
                {<MovieList movies={favMovies} addFavMovie={removeFavMovie} FavouriteButton={FavouriteButton}/>}
            </div>
        </div>
        
    )
};


export default Home;




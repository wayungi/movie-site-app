import MovieList from './MovieList';
import FavouriteButton from "./FavouriteButton";
import  RemoveFavButton from "./RemoveFavButton";


const Home = ({movies, favMovies, addFavMovie, removeFavMovie}) => {

    return (
        <div>
            <div>
                {<MovieList movies={movies} addFavMovie={addFavMovie} FavouriteButton={FavouriteButton}/>}
            </div>
            <h2>Favourite Movies</h2>

            <div>
                {<MovieList movies={favMovies} addFavMovie={removeFavMovie} FavouriteButton={RemoveFavButton}/>}
            </div>
        </div>
        
    )
};


export default Home;




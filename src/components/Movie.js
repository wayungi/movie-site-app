import FavouriteButton from "./FavouriteButton";

const Movie = ({movie, addFavMovie}) => {
    return (
        <div className="movie">
            <img src={movie.Poster} alt={movie.Title}/>
            <FavouriteButton movie={movie} addFavMovie={addFavMovie}/>
        </div>
    );
};

export default Movie;
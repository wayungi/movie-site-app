import FavouriteButton from "./FavouriteButton";

const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img src={movie.Poster} alt={movie.Title}/>
            <FavouriteButton />
        </div>
    );
};

export default Movie;
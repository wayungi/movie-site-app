const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img src={movie.Poster} alt={movie.Title}/>
            <div className="overlay">
                Add to Favourites
            </div>
        </div>
    );
};

export default Movie;
const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
    );
};

export default Movie;
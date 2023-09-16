const Movie = ({movie}) => {
    return (
        <div className="movie pt-2 pb-2">
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
    );
};

export default Movie;
const Movie = ({movie}) => {
    return (
        <div>
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
    );
};

export default Movie;
import Movie from './Movie';


const MovieList = ({movies, addFavMovie, FavouriteButton}) => {

    const movieList = movies?.map((movie, index) => <Movie key={index} movie={movie} addFavMovie={addFavMovie} FavouriteButton={FavouriteButton}/>);

    return (
        <section className="container-fluid movie-list">
            <div className="row">{movieList}</div>
        </section>

    );
};

export default MovieList;
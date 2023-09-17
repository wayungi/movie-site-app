import Movie from './Movie';


const MovieList = ({movies}) => {

    console.log(typeof movies)

    const movieList = movies?.map((movie, index) => <Movie key={index} movie={movie}/>);

    return (
        <section className="container-fluid movie-list">
            <div className="row">{movieList}</div>
        </section>

    );
};

export default MovieList;
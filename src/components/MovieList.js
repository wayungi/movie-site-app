import Movie from './Movie'

const MovieList = ({movies}) => {

    const movieList = movies.map((movie, index) => <Movie key={index} movie={movie}/>);

    return (
        <section>
            {movieList}
        </section>

    );
};

export default MovieList;
const searchMovie = async (serachTerm) => {
    const URL =  `http://www.omdbapi.com/?s=${searchTerm}&apikey=fa994858`;
    const result = await fetch(URL);
    const resultJson = result.json();
    return resultJson;
}
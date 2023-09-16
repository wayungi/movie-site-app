export const searchMovie = async (searchTerm) => {
    const URL =  `http://www.omdbapi.com/?s=${searchTerm}&apikey=fa994858`;
    const result = await fetch(URL);
    const resultJson = result.json();
    console.log(resultJson.Search);
    return resultJson.Search;
}
import {useState} from 'react';

const Search = ({setTitleSearch}) => {

    const [search, setSearch] = useState('');

    const movieLookup = (value) => {
        setSearch(value);
        setTitleSearch(value);
    }

     return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => movieLookup(e.target.value)}
                placeholder="Type movie title ..."
            />
        </div>
    );
};

export default Search;

import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

const SearchForm = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log(res.data.results)
      const characters = res.data.results.filter(character => 
        character.name.toLowerCase().includes(search.toLowerCase())
      );
    setResults(characters)
    })
  }, [search])

  const handleChange = e => {
    setSearch(e.target.value);
  };
 
  return (
    <section className='search-form'>
     <form className='col s12'>
      <div className='input-field col s6'>
        <i className='fas fa-search prefix' />
        <textarea
          id='character'
          className='materialize-textarea'
          type='text'
          value={search}
          onChange={handleChange}
          name='character'
        />
        <label htmlFor='character'>Search Characters</label>
      </div>
     </form>
     <div>
     {results.map(char => (
        <CharacterCard char={char} />
      ))}
     </div>
    </section>
  );
}

export default SearchForm;
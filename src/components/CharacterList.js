import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';

const CharacterList = props => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const getChars = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setChars(res.data.results);
    })
    .catch(e => {
      console.log(e)
    });
  }
    
    getChars();
  }, []);

  return (
    <div className='character-list container center-align'>
      <iframe src='https://giphy.com/embed/LpkYElMLodFXjHyxi4' width='480' height='360' frameBorder='0' />
      <br />
      <br />
      <SearchForm chars={chars} />
    </div>
  );
}

export default CharacterList;
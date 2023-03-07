import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import './Search.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Search({ hiddenSearchButtons = false }) {
  const [input, setInput] = useState('');
  let navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log('from the user input', input);
    navigate('/search');
  };
  console.log('hidebuttons', hiddenSearchButtons);
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <KeyboardVoiceIcon />
      </div>
      {!hiddenSearchButtons ? (
        <div className="search__buttons">
          <Button variant="outlined" type="submit" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonHidden"
            variant="outlined"
            type="submit"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;

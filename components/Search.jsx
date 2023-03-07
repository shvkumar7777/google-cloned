import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import './Search.css';
import Button from '@mui/material/Button';

function Search() {
  const [input, setInput] = useState('');

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <KeyboardVoiceIcon />
      </div>
      <div className="search__buttons">
        <Button variant="outlined" onClick={search}>
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;

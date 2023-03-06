import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon />
        <input type="text" />
        <KeyboardVoiceIcon />
      </div>
    </div>
  );
}

export default Search;

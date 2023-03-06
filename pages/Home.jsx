import React from 'react';
import './Home.css';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          {/* About link */}
          <Link to="/about">About</Link>
          {/* Store link */}
          <Link to="/store">Store</Link>
        </div>
        <div className="header__right">
          {/* Gmail Link */}
          <Link to="/gmail">Gmail</Link>
          {/* Images Link*/}
          <Link to="/about">Images</Link>
          {/* Gallery icon */}
          {/* Progile Avatar */}
        </div>
      </div>

      <div className="home__body"> this is body</div>
    </div>
  );
}

export default Home;

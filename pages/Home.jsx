import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';
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
          <AppsIcon />
          {/* Progile Avatar */}
          <AccountCircleIcon />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
          alt="file google logo svg wikimedia commons"
        />
        <div className="home__inputSearchContainer">
          <Search hiddenSearchButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;

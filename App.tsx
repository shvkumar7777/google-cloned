import * as React from 'react';
import './style.css';
import Home from './pages/Home';
import Search from './pages/Search';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';
import Books from './Books';
import Categories from './Categories.js';

const header = () => (
  <div>
    <nav className="header-nav">
      <h1 className="title"> Book Store CMS </h1>
      <ul className="nav-ul">
        <li>
          <Link to="/"> Books </Link>
        </li>
        <li className="mid-li">
          <Link to="/Categories"> Categories </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </div>
);

export default header;
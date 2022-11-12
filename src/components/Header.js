import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';
import Books from './Books';
import Categories from './Categories';
import profileImg from './profile_image.png';

const header = () => (
  <div>
    <nav className="header-nav">
      <div className="header">
        <h1 className="title"> Book Store CMS </h1>
        <ul className="nav-ul">
          <li>
            <Link to="/"> Books </Link>
          </li>
          <li className="mid-li">
            <Link to="/Categories"> Categories </Link>
          </li>
        </ul>
      </div>
      <img className="profile-image" src={profileImg} alt="Profile" width="50" height="50" />
    </nav>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </div>
);

export default header;

import React from 'react';
import Navigetion from './Navigetion';

const AppBar = () => {
  return (
    <header className="AppBar">
      <Navigetion.NavHome />

      <a className="nav_img" href="https://www.themoviedb.org/">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="img themoviedb.org"
        />
      </a>
    </header>
  );
};

export default AppBar;

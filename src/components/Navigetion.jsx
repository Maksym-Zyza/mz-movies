import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const NavHome = () => {
  return (
    <nav className="NavDiv">
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink-active"
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className="NavLink"
        activeClassName="NavLink-active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

const NavMovieDetails = ({ match }) => {
  return (
    <div className="navlink_div">
      <NavLink
        to={`${match.url}/cast`}
        className="NavLink link"
        activeClassName="NavLink-active"
      >
        Cast <span className="link_sign">&#9660;</span>
      </NavLink>
      <NavLink
        to={`${match.url}/reviews`}
        className="NavLink link"
        activeClassName="NavLink-active"
      >
        Reviews <span className="link_sign">&#9660;</span>
      </NavLink>
    </div>
  );
};

const Navigation = {
  NavHome,
  NavMovieDetails,
};

export default Navigation;

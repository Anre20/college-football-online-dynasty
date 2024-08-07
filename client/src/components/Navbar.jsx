import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/history">History</Link>
        <Link to="/rules">Rules</Link>
      </div>
      <div className="navbar-right">
        <img src="https://media.tenor.com/4D65j0o-olAAAAAi/football-fire.gif" alt="Football Fire GIF" className="navbar-gif" />
      </div>
    </nav>
  );
};

export default Navbar;

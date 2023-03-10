import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        Grab Restaurants
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Add">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

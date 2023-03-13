import React from 'react'
import { Link } from "react-router-dom"


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark container" data-bs-theme="dark">
      <div className="container-fluid">
        <li><Link className="navbar-brand" to="/">
          Navbar
        </Link></li>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <li><Link className="nav-link active" aria-current="page" to="/form-news">Form News</Link></li>
          <li><Link className="nav-link" to="/image">Slider</Link></li>
          <li><Link className="nav-link" to="/quote">Random Quote</Link></li>
          <li><Link className="nav-link" to="/video">Video Player</Link></li>
          <li><Link className="nav-link" to="/bmi">BMI</Link></li>
          </div>
        </div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </nav>
  );
}

export default Navbar;

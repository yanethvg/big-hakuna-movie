import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <Link to={'/'} className="navbar-brand" >Hakuna Movie</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={'/'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to={'/moviespop'} className="nav-link">Popular Movies<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to={'/movieslast'} className="nav-link">Lastest Movies<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      </div>
    </nav>
  );
};

export default Header;
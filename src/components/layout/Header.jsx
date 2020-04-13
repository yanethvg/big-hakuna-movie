import React from 'react';
import { Link } from 'react-router-dom';
import Carrito from '../Carrito';

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
            <Link to={'/moviesplay'} className="nav-link"> Now Playing Movies<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to={'/moviesquery'} className="nav-link"> Search Movies<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <div className="my-2 my-lg-0">
          <Carrito ></Carrito>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Header;
import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <ul className="nav__ul container-fluid">
            <div className="nav-left">
              <li className="nav-left__ul__li list-unstyled">
                <Link to='/'>
                  <img className="nav__ul__li__img" src="https://ikshu038.github.io/PF-Guevara-js/images/logo.png" alt="Logo de Cafe Olavarria" />
                </Link>
              </li>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-links mt-3 justify-content-end" id="navbarNavAltMarkup">
              <li className="nav-right__ul__li list-unstyled">
                <NavLink className="nav-link" to='/'>Inicio</NavLink>
              </li>
              <li className="nav-right__ul__li list-unstyled">
                <NavLink className="nav-link" to="/categoria/bombillas">Bombillas</NavLink>
              </li>
              <li className="nav-right__ul__li list-unstyled">
                <NavLink className="nav-link" to="/categoria/mates">Mates</NavLink>
              </li>
              <li className="nav-right__ul__li list-unstyled">
                <NavLink className="nav-link" to="/categoria/yerbas">Yerbas</NavLink>
              </li>
              <li className="nav-right__ul__li list-unstyled">
              <NavLink to="/cart" className="nav-link fw-bold">
                <CartWidget/>
              </NavLink>            
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
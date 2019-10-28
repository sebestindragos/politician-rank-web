import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <a className="navbar-brand" href="#">
        Profil de Politician
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Acasa <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vote">
              Voteaza
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Autentificare
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inregistrare
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

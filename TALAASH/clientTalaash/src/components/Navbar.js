import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand navbar-white navbar-dark bg-dark mb-2">
        <div class="navbar-brand  ">TALAASH</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Demo">
                Demo
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Login">
                <b>Login</b>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/SignUp">
                <b>Register</b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

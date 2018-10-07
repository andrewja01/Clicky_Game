import React from "react";
import "./Navbar.css";

const Navbar = props => (

  <nav className="navbar fixed-top navbar-expand-lg navbar-light">
    <span className="col-4 ml-5 navbar-text text-dark h1">Clicky Game!</span>
    <span className="col ml-5 navbar-text text-dark h1">{props.answer}</span>
    <span className="col ml-5 navbar-text text-dark h1">Score: {props.count} | Top Score: {props.topScore} </span>
  </nav>

);

export default Navbar;

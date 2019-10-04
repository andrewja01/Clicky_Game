import React from 'react';

const Navbar = props => (
  <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark '>
    <span className='col-xl navbar-text text-light h1'>Clicky Game!</span>
    <span className='col-xl navbar-text text-light h2'>{props.answer}</span>
    <span className='col-xl-2 navbar-text text-light h1'>
      Score: {props.count}
    </span>
    <span className='col-xl-2 navbar-text text-light h1'>
      {' '}
      Top Score: {props.topScore}{' '}
    </span>
  </nav>
);

export default Navbar;

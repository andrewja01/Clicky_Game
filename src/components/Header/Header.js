import React from 'react';
import './Header.css';

const Header = props => (
  <div className='hero text-center col-xl'>
    <h2>Clicky Game!</h2>
    <h4>
      click an image to increase your score. If you click the same image twice
      its GAME OVER
    </h4>
  </div>
);

export default Header;

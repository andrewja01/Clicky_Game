import React from 'react';
import './wrapper.css';

const Wrapper = props => (
  <div className='wrapper col-12 justify-content-center'>{props.children}</div>
);

export default Wrapper;

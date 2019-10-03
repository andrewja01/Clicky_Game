import React from 'react';
import './MatchCard.css';

const MatchCard = props => (
  <div
    className='card col-xl-3 col-md-4 col-sm-1 p-5 m-5'
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className='img-container'>
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default MatchCard;

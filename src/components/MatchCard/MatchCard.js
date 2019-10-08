import React from 'react';
import './MatchCard.css';

const MatchCard = props => (
  <div
    className='btn btn-outline-secondary card col-xl-3 col-md-4 col-sm-3 m-5 align-items-center'
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className='img-container m-5 align-items-center'>
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default MatchCard;

import React from 'react';

const Location = ({city, woeid}) => {
  return <div>
    <span>City: {city}</span>
    <span> - </span>
    <span>Woeid: {woeid}</span>
  </div>
}

export default Location;

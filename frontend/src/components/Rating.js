import React from 'react';

export default function Rating({ value, text, color }) {
  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index}>
          <i style={{ color }} className={
            value >= star 
            ? 'fas fa-star'
            : value >= (star - 0.5) 
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
          }></i>
        </span>
      ))}
      <span className="reviews">{text}</span>
    </div>
  )
}

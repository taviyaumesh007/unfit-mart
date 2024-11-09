import React from 'react';
import '../style/RatingFilter.css'; // Import your CSS file

const RatingFilter = () => {
  const ratings = [5, 4, 3, 2]; // Define your star ratings

  return (
    <div className="rating-filter">
      <h4>Rating</h4>
      {ratings.map((rating) => (
        <label key={rating} className="rating-option">
          <input type="checkbox" />
          <div className="stars">
            {Array(rating)
              .fill(null)
              .map((_, index) => (
                <span key={index} className="star">★</span>
              ))}
          </div>
          <span className="and-up">& Up</span>
        </label>
      ))}
    </div>
  );
};

export default RatingFilter;

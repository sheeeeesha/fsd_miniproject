import React from 'react';

const Rating = ({ rating }) => {
  const totalSpans = 5;
  const filledSpans = Math.round(rating); // Rounding off the rating value to nearest integer

  return (
    <div className="flex items-center rating-comment-number">
      <div className="rating mx-5 w-fit h-fit flex justify-between items-center">
        {/* Create totalSpans number of spans, fill first 'filledSpans' with green */}
        {[...Array(totalSpans)].map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mr-0.5 outline outline-1 outline-green-600 rounded-full ${
              index < filledSpans ? 'bg-green-600' : 'bg-white'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Rating;

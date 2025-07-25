import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const InteractiveRating = ({ productId, initialRating = 0, onRatingSubmit }) => {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [averageRating, setAverageRating] = useState(initialRating);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    // Load existing ratings from localStorage
    const savedRatings = localStorage.getItem(`ratings_${productId}`);
    if (savedRatings) {
      const ratings = JSON.parse(savedRatings);
      setAverageRating(ratings.average);
      setTotalRatings(ratings.total);
    }

    // Check if user has already rated this product
    const userRated = localStorage.getItem(`user_rated_${productId}`);
    if (userRated) {
      setHasRated(true);
      setUserRating(parseInt(userRated));
    }
  }, [productId]);

  const handleRatingClick = (rating) => {
    if (hasRated) return;

    setUserRating(rating);
    setHasRated(true);

    // Save user rating
    localStorage.setItem(`user_rated_${productId}`, rating.toString());

    // Update average rating
    const savedRatings = localStorage.getItem(`ratings_${productId}`);
    let currentRatings = savedRatings ? JSON.parse(savedRatings) : { total: 0, sum: initialRating * 10 };
    
    currentRatings.total += 1;
    currentRatings.sum += rating;
    
    const newAverage = currentRatings.sum / (currentRatings.total + 10); // +10 for initial base ratings
    
    setAverageRating(newAverage);
    setTotalRatings(currentRatings.total);

    // Save updated ratings
    localStorage.setItem(`ratings_${productId}`, JSON.stringify({
      average: newAverage,
      total: currentRatings.total,
      sum: currentRatings.sum
    }));

    if (onRatingSubmit) {
      onRatingSubmit(rating, newAverage);
    }
  };

  const handleMouseEnter = (rating) => {
    if (!hasRated) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    if (!hasRated) {
      setHoverRating(0);
    }
  };

  const displayRating = hoverRating || userRating;

  return (
    <div className="interactive-rating">
      <div className="flex items-center space-x-2 mb-2">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`p-1 transition-colors ${hasRated ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={handleMouseLeave}
              disabled={hasRated}
            >
              <Star
                className={`w-5 h-5 ${
                  star <= displayRating
                    ? 'fill-yellow-400 text-yellow-400'
                    : star <= averageRating
                    ? 'fill-yellow-200 text-yellow-200'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
        <span className="text-sm font-medium text-gray-700">
          {averageRating.toFixed(1)} ({totalRatings + 10} ratings)
        </span>
      </div>
      
      {hasRated ? (
        <p className="text-sm text-green-600 font-medium">
          Thank you for rating! You gave {userRating} star{userRating !== 1 ? 's' : ''}.
        </p>
      ) : (
        <p className="text-sm text-gray-500">
          Click to rate this product
        </p>
      )}
    </div>
  );
};

export default InteractiveRating;


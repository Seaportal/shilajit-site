import React, { useState } from 'react';
import { Star, Edit3, Check, X } from 'lucide-react';

const AdminRating = ({ 
  rating, 
  totalRatings = 10, 
  size = "md", 
  editable = false, 
  onRatingChange = null,
  showNumber = true,
  className = ''
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempRating, setTempRating] = useState(rating);
  const [hoveredStar, setHoveredStar] = useState(0);

  // Convert rating to array of filled stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  // Size classes
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  
  const starSize = sizeClasses[size] || sizeClasses.md;

  const handleStarClick = (starIndex) => {
    if (!isEditing) return;
    const newRating = starIndex + 1;
    setTempRating(newRating);
  };

  const handleStarHover = (starIndex) => {
    if (!isEditing) return;
    setHoveredStar(starIndex + 1);
  };

  const handleMouseLeave = () => {
    if (!isEditing) return;
    setHoveredStar(0);
  };

  const handleSaveRating = () => {
    if (onRatingChange) {
      onRatingChange(tempRating);
    }
    setIsEditing(false);
    setHoveredStar(0);
  };

  const handleCancelEdit = () => {
    setTempRating(rating);
    setIsEditing(false);
    setHoveredStar(0);
  };

  const handleStartEdit = () => {
    setTempRating(rating);
    setIsEditing(true);
  };

  const displayRating = isEditing ? (hoveredStar || tempRating) : rating;
  const displayFullStars = Math.floor(displayRating);
  const displayHasHalfStar = !isEditing && (displayRating % 1 >= 0.5);

  return (
    <div className={`admin-rating flex items-center space-x-2 ${className}`}>
      <div 
        className="flex items-center space-x-1"
        onMouseLeave={handleMouseLeave}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${starSize} transition-colors duration-150 ${
              isEditing ? 'cursor-pointer' : ''
            } ${
              i < displayFullStars
                ? 'fill-yellow-400 text-yellow-400'
                : i === displayFullStars && displayHasHalfStar
                ? 'fill-yellow-200 text-yellow-400'
                : isEditing && i < (hoveredStar || tempRating)
                ? 'fill-yellow-300 text-yellow-400'
                : 'text-gray-300'
            }`}
            onClick={() => handleStarClick(i)}
            onMouseEnter={() => handleStarHover(i)}
          />
        ))}
      </div>
      
      {showNumber && (
        <span className="text-sm font-medium text-gray-700">
          {displayRating.toFixed(1)} ({totalRatings} ratings)
        </span>
      )}

      {editable && (
        <div className="flex items-center space-x-1">
          {!isEditing ? (
            <button
              onClick={handleStartEdit}
              className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-150"
              title="Edit rating"
            >
              <Edit3 className="w-4 h-4" />
            </button>
          ) : (
            <>
              <button
                onClick={handleSaveRating}
                className="p-1 text-gray-400 hover:text-green-600 transition-colors duration-150"
                title="Save rating"
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                onClick={handleCancelEdit}
                className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-150"
                title="Cancel edit"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminRating;


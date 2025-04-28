
import React from "react";
import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className = "",
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`star-full-${i}`}
          className="w-5 h-5 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      ))}
      {hasHalfStar && (
        <StarHalf
          className="w-5 h-5 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      )}
      {Array.from({ length: Math.floor(maxRating - rating - (hasHalfStar ? 0.5 : 0)) }).map(
        (_, i) => (
          <Star
            key={`star-empty-${i}`}
            className="w-5 h-5 text-gray-300"
            aria-hidden="true"
          />
        )
      )}
    </div>
  );
};

export default StarRating;

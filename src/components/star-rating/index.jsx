import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ numOfstars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index + 1);
  }

  function handleMouseEnter(index) {
    setHover(index + 1);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="star-rating">
      {Array(numOfstars)
        .fill()
        .map((_, index) => (
          <FaStar
            key={index}
            className={index < (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        ))}
    </div>
  );
}

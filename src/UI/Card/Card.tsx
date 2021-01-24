import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import { Obverse } from "./Obverse/Obverse";
import { Reverse } from "./Reverse/Reverse";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Obverse handleFlip={handleFlip} />
      <Reverse handleFlip={handleFlip} />
    </ReactCardFlip>
  );
};

export default Card;

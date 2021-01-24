import React from "react";
import classes from "../Card.module.scss";

export const Reverse = ({handleFlip}: ReverseInterface) => {
  return (
    <div className={classes.card} onClick={handleFlip}>
      <p className={classes.word}>Słowo</p>
      <p className={classes.example}>Druga strona, która zawiera słowo i przykład</p>
    </div>
  );
};


interface ReverseInterface {
  handleFlip: () => void;
}
import React from "react";
import classes from "../Card.module.scss";

export const Obverse = ({handleFlip}: ObverseInterface) => {
  return (
    <div className={classes.card} onClick={handleFlip}>
      <p className={classes.word}>Słowo</p>
      <p className={classes.example}>Dłuższy przykład ze słowem, które jest wyżej</p>
    </div>
  );
};

interface ObverseInterface {
  handleFlip: () => void;
}

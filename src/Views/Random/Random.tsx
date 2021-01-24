import React from "react";
import classes from "./Random.module.scss";
import Card from "../../UI/Card/Card";

const Random = () => {
  return (
    <div>
      <h2 className={classes.subTitle}>Random word</h2>
      <Card />
      {/*button next*/}
    </div>
  );
};

export default Random;

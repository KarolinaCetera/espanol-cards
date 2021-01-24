import React from "react";
import { Link } from "react-router-dom";
import classes from "./MenuElement.module.scss"

const MenuElement = ({ name, path, icon }: Element) => {

  return (
    <Link to={path} className={classes.menuElement}>
      <img src={icon} alt="" />
      <p>{name}</p>
    </Link>
  );
};

export default MenuElement;

interface Element {
  name: string;
  path: string;
  icon?: string;
}

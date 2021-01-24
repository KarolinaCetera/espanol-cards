import React from "react";
import classes from "./Navigation.module.scss";
import { menuElements } from "../../consts";
import MenuElement from "../../UI/MenuElement/MenuElement";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      {menuElements.map((element) => (
        <MenuElement
          key={element.id}
          name={element.name}
          icon={element.icon}
          path={element.path}
        />
      ))}
    </div>
  );
};

export default Navigation;

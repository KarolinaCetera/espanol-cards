import React from "react";
import classes from "./Main.module.scss";
import { Route, Switch } from "react-router-dom";
import Home from "../../Views/Home/Home";
import Random from "../../Views/Random/Random";
import About from "../../Views/About/About";
import Categories from "../../Views/Categories/Categories";

const Main = () => {
  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/random">
          <Random />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;

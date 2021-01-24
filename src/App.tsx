import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./containers/Main/Main";
import Header from "./containers/Header/Header";
import Navigation from "./containers/Navigation/Navigation";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Main />
        <Navigation />
      </div>
    </Router>
  );
}

export default App;

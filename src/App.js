import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Peliculas from "./components/Peliculas";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Peliculas}></Route>
    </Switch>
  </Router>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => (
  <Router>
    <div id="shell">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Inicio}></Route>
      </Switch>
      <Footer></Footer>
      </div>
  </Router>
);

export default App;

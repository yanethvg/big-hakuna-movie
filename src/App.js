import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Peliculas from "./components/Peliculas";

const App = () => (
  <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Inicio}></Route>
        <Route exact path="/movies" component={Peliculas}></Route>
      </Switch>
      <Footer></Footer>
     
  </Router>
);

export default App;

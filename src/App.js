import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PeliculasPop from "./components/PeliculasPop";
import Show from "./components/Peliculas/Show";

const App = () => (
  <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Inicio}></Route>
        <Route exact path="/moviespop" component={PeliculasPop}></Route>
        <Route exact path="/movies/:id" component={Show}></Route>
      </Switch>
      <Footer></Footer>
     
  </Router>
);

export default App;

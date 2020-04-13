import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PeliculasPop from "./components/PeliculasPop";
import PeliculasPlaying from "./components/PeliculasPlaying";
import PeliculasSearch from "./components/PeliculasBusqueda";
import Show from "./components/Peliculas/Show";
import Confirmacion from './components/ConfirmacionCompra';

const App = () => (
  <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Inicio}></Route>
        <Route exact path="/moviespop" component={PeliculasPop}></Route>
        <Route exact path="/moviesplay" component={PeliculasPlaying}></Route>
        <Route exact path="/moviesquery" component={PeliculasSearch}></Route>
        <Route exact path="/movies/:id" component={Show}></Route>
        <Route exact path="/confirmacion" component={Confirmacion}></Route>
      </Switch>
      <Footer></Footer>
     
  </Router>
);

export default App;

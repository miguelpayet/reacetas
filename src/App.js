import './css/App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';

import PaginaDetalleCategoria from "./components/PaginaDetalleCategoria.js";
import PaginaDetalleIngrediente from "./components/PaginaDetalleIngrediente.js";
import PaginaDetalleReceta from "./components/PaginaDetalleReceta.js";
import PaginaError from "./components/PaginaError.js";
import PaginaPrincipal from "./components/PaginaPrincipal.js";
import PaginaRecetas from "./components/PaginaRecetas.js";
import PaginaResultados from "./components/PaginaResultados.js";
import React, { Component } from 'react';
import SearchForm from './components/SearchForm.js';
import { history } from './util';
import Router from "./util/Router.js";

const routes = [
  { path: /\/busqueda\?valor=.*/, componente: PaginaResultados },
  { path: /\/categoria\?id=[0-9]*/, componente: PaginaDetalleCategoria },
  { path: /\/error\//, componente: PaginaError },
  { path: /\/insumo\?id=[0-9]*/, componente: PaginaDetalleIngrediente },
  { path: /\/receta\?id=[0-9]*/, componente: PaginaDetalleReceta },
  { path: /\/recetas\?valor=.*/, componente: PaginaRecetas },
  { path: /\/$/, componente: PaginaPrincipal }
];

class App extends Component {

  constructor(props) {
    super(props);
    this.router = new Router(routes);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getEstado = this.getEstado.bind(this);
    this.getLista = this.getLista.bind(this);
    this.historyCallback = this.historyCallback.bind(this);
    this.render = this.render.bind(this);
    this.state = { componente: PaginaPrincipal, recetas: [], receta: {}, lista: {} };
  }

  componentDidMount() {
    history.onChange((state, title, pathname) => {
      this.historyCallback(state, title, pathname);
    });
    const esto = this;
    window.onpopstate = function (event) {
      esto.historyCallback(event.state, "", document.location);
    };
  }

  getEstado() {
    return this.state;
  }

  getLista() {
    return this.state.lista;
  }

  historyCallback(state, title, href) {
    const ele = this.router.resolver(document.location.href);
    if (ele !== undefined) {
      this.setState(Object.assign({ componente: ele.componente }, state));
    }
  }

  render() {
    const Elemento = this.state.componente
    return <div className="App container-fluid">
      <SearchForm />
      <Elemento estado={this.getEstado} />
    </div>
  }

}

export default App;

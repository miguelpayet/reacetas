import './css/App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';

import React, { Component } from 'react';

import PaginaDetalleCategoria from "./PaginaDetalleCategoria.js";
import PaginaDetalleIngrediente from "./PaginaDetalleIngrediente.js";
import PaginaDetalleReceta from "components/PaginaDetalleReceta.js";
import PaginaPrincipal from "./PaginaPrincipal.js";
import PaginaRecetas from "components/PaginaRecetas.js";
import PaginaResultados from "./PaginaResultados.js";
import SearchForm from 'components/SearchForm.js';
import { history } from './util';

const routes = [
  { path: /\/busqueda\?valor=.*/, componente: PaginaResultados },
  { path: /\/categoria\?id=[0-9]*/, componente: PaginaDetalleCategoria },
  { path: /\/insumo\?id=[0-9]*/, componente: PaginaDetalleIngrediente },
  { path: /\/receta\?id=[0-9]*/, componente: PaginaDetalleReceta },
  { path: /\/recetas\?valor=.*/, componente: PaginaRecetas },
  { path: /\/$/, componente: PaginaPrincipal }
];

class App extends Component {

  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getEstado = this.getEstado.bind(this);
    this.historyCallback = this.historyCallback.bind(this);
    this.render = this.render.bind(this);
    this.state = { componente: PaginaPrincipal, recetas: [], receta: {} };
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

  historyCallback(state, title, href) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path.test(document.location.href)) {
        this.setState(Object.assign({ componente: routes[i].componente }, state));
        break;
      }
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

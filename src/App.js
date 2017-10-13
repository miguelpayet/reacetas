import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/App.css';
import {history} from './util';
import SearchForm from './SearchForm.js';
import PaginaPrincipal from "./PaginaPrincipal.js";
import PaginaDetalleReceta from "./PaginaDetalleReceta.js";
import PaginaDetalleIngrediente from "./PaginaDetalleIngrediente.js";
import PaginaDetalleCategoria from "./PaginaDetalleCategoria.js";

const routes = [
  {path: /\/busqueda\?valor=.*/, componente: PaginaPrincipal},
  {path: /\/receta\?id=[0-9]*/, componente: PaginaDetalleReceta},
  {path: /\/insumo\?id=[0-9]*/, componente: PaginaDetalleIngrediente},
  {path: /\/categoria\?id=[0-9]*/, componente: PaginaDetalleCategoria},
  {path: /\/$/, componente: PaginaPrincipal}
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {componente: PaginaPrincipal, resultados: [], receta: {}};
    this.componentDidMount = this.componentDidMount.bind(this);
    this.render = this.render.bind(this);
    this.historyCallback = this.historyCallback.bind(this);
    this.getEstado = this.getEstado.bind(this);
  }

  componentDidMount() {
    history.onChange((state, title, pathname) => {
        this.historyCallback(state, title, pathname);
    });
    const esto = this;
    window.onpopstate = function(event) {
      esto.historyCallback(event.state, "", document.location);
    };
  }

  getEstado() {
    return this.state;
  }

  historyCallback(state, title, href) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path.test(document.location.href)) {
        this.setState(Object.assign({componente: routes[i].componente}, state));
        break;
      }
    }
  }
    
  render() {
    const Elemento = this.state.componente
    return  <div className="App container-fluid">
              <div className="SearchForm">
                <SearchForm />
              </div>
              <Elemento estado={this.getEstado} />
            </div>
  }

}

export default App;

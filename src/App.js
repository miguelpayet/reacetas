import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/App.css';
import {history} from './util';
import SearchForm from './SearchForm.js';
import PaginaPrincipal from "./PaginaPrincipal.js";
import PaginaDetalleReceta from "./PaginaDetalleReceta.js";

const routes = [
  {path: /\/busqueda\?valor=.*/, componente: PaginaPrincipal},
  {path: /\/receta\?id=[0-9]*/, componente: PaginaDetalleReceta},
  {path: /\/$/, componente: PaginaPrincipal}
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {componente: PaginaPrincipal, resultados: []};
    this.componentDidMount = this.componentDidMount.bind(this);
    this.render = this.render.bind(this);
    this.historyCallback = this.historyCallback.bind(this);
    this.getEstado = this.getEstado.bind(this);
  }

  componentDidMount() {
    history.onChange((state, title, pathname) => {
        console.log("onchange " + pathname);
        this.historyCallback(state, title, pathname);
    });
    const esto = this;
    window.onpopstate = function(event) {
      console.log("onpopstate " + document.location);
      esto.historyCallback(event.state, "", document.location);
    };
  }

  getEstado() {
    return this.state;
  }

  historyCallback(state, title, href) {
    for (let i = 0; i < routes.length; i++) {
      console.log(routes[i].path, document.location.href, document.location.href.length);
      if (routes[i].path.test(document.location.href)) {
        console.log("test " + routes[i].path);
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

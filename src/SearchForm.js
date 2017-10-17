import React from 'react';
import { history } from './util';
import Busqueda from './Busqueda.js';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.buscar = this.buscar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.publicar = this.publicar.bind(this);
    this.render = this.render.bind(this);
    this.state = { texto: '', recetas: true, ingredientes: false, categorias: false };
}

  buscar(b) {
    fetch(b.url)
      .then(response => response.json())
      .then(result => { b.resultados = result; this.publicar(b) })
      .catch(e => console.log(e));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const b = new Busqueda(this.state);
    this.buscar(b);
  }

  publicar(b) {
    history.pushState({ busqueda: b }, "", "/busqueda?valor=" + b.texto);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <p className="buscar">
              <input type="text" id="texto" name="texto" placeholder="¿Qué estás buscando?" onChange={this.handleChange} />
              <button type="submit" className="btn btn-light btn-xs">
                <span className="fa fa-search"></span>
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;

/*
            <p className="buscar">
              <label>
                <input type="checkbox" id="recetas" name="recetas" defaultChecked={this.state.recetas} onChange={this.handleChange} />recetas
                </label>
              <label>
                <input type="checkbox" id="ingredientes" name="ingredientes" onChange={this.handleChange} />ingredientes
                </label>
              <label>
                <input type="checkbox" id="categorias" name="categorias" onChange={this.handleChange} />categorías
                </label>
            </p>

          */
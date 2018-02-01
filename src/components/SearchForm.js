import React from 'react';
import { history } from '../util';
import Busqueda from '../Busqueda.js';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.buscar = this.buscar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.publicar = this.publicar.bind(this);
    this.publicarError = this.publicarError.bind(this);
    this.render = this.render.bind(this);
    this.state = { texto: '', recetas: true, ingredientes: false, categorias: false };
  }

  buscar(b) {
    const _this = this;
    fetch(b.url)
      .then(function(response) {
        b.status = response.status;
        response.json().then(function(data) {
          b.resultados = data
          _this.publicar(b)
          });
        })
      .catch(e => {
        console.log(e); 
        this.publicarError(e.message)
      });
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
  
  publicarError(e) {
    history.pushState({ error: e }, "", "/error/");
  }

  render() {
    return (
      <div className="SearchForm">
        <div className="row">
          <div className="col-md-10 col-sm-10">
            <form onSubmit={this.handleSubmit}>
              <p className="buscar">
                <input type="text" id="texto" name="texto" placeholder="¿Qué estás buscando?" onChange={this.handleChange} />
                <button type="submit" className="btn btn-light btn-xs">
                  <span className="fa fa-search"></span>
                </button>
              </p>
            </form>
          </div>
          <div className="col-md-2 col-sm-2">
            <button type="button">ver lista</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;

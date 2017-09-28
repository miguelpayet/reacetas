import React from 'react';
import BusquedaActions from './BusquedaActions.js';
import Busqueda from './Busqueda.js';
import CampoBuscar from './CampoBuscar.js';

class SearchForm extends React.Component {

    constructor() {
      super();
      this.state = {texto: '', recetas: true, ingredientes: false, categorias: false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({[name]: value});
    }
  
    handleSubmit(event) {
      const b = new Busqueda(this.state);
      BusquedaActions.addBusqueda(b);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <CampoBuscar />
          <p className="buscar">
            <label>
              <input type="checkbox" id="recetas" name="recetas" defaultChecked={this.state.recetas} onChange={this.handleChange} />recetas
            </label>
            <label>
              <input type="checkbox" id="ingredientes" name="ingredientes" onChange={this.handleChange} />ingredientes
            </label>
            <label>
              <input type="checkbox" id="categorias" name="categorias" onChange={this.handleChange} />categorias
            </label>
          </p>
        </form>
      );
    }
  }

  export default SearchForm;
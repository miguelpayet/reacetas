import React from 'react';
import BusquedaActions from './BusquedaActions.js';
import Busqueda from './Busqueda.js';

class SearchForm extends React.Component {

    constructor() {
      super();
      this.state = {receta: '', ingrediente: '', categoria: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      this.setState({[target.name]: target.value});
    }
  
    handleSubmit(event) {
      const b = new Busqueda(this.state);
      BusquedaActions.addBusqueda(b);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
              <label>
                  recetas
                  <input type="text" id="receta" name="receta" onChange={this.handleChange} />
              </label>
              <label>
                  ingredientes
                  <input type="text" id="ingrediente" name="ingrediente" onChange={this.handleChange} />
              </label>
              <label>
                  categorias
                  <input type="text" id="categoria" name="texto" onChange={this.handleChange} />
              </label>
          </p>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default SearchForm;
import React from 'react';
import BusquedaActions from './BusquedaActions.js';
import Busqueda from './Busqueda.js';

class SearchFormSimple extends React.Component {

    constructor() {
      super();
      this.state = {texto: '', recetas: true, ingredientes: true, categorias: true};
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
                  buscar
                  <input type="text" id="texto" name="texto" onChange={this.handleChange} />
              </label>
          </p>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default SearchFormSimple;
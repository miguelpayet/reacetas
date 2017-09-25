import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import BusquedaStore from './BusquedaStore.js';
import ListaRecetas from './ListaRecetas.js'
 
class App extends Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    BusquedaStore.addNotify(this.onChange);
  }

  onChange(b) {
    console.log(b);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>rest-client</h2>
        </div>
        <div className="SearchForm">
          <SearchForm />
        </div>
        <div>
          <ListaRecetas />
        </div>
      </div>
    );
  }

}

export default App;

/*
*/

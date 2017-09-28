import './css/bootstrap.min.css'; 
import './css/font-awesome.min.css';
import './css/App.css';
import BusquedaStore from './BusquedaStore.js';
import ListaRecetas from './ListaRecetas.js'
import React, { Component } from 'react';
import SearchForm from './SearchForm.js';

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

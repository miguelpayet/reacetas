import React, { Component } from 'react';
import './css/bootstrap.min.css'; 
import './css/font-awesome.min.css';
import './css/App.css';
import ListaResultados from './ListaResultados.js'
import SearchForm from './SearchForm.js';

class App extends Component {

  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    console.log("00");
    return  <div className="App container-fluid">
              <div className="SearchForm">
                <SearchForm />
              </div>
              <div>
                <ListaResultados />
              </div>
            </div>
  }

}

export default App;


import React, { Component } from 'react';
import './css/bootstrap.min.css'; 
import './css/font-awesome.min.css';
import './css/App.css';
import {history} from './util';
import SearchForm from './SearchForm.js';
import PaginaPrincipal from "./PaginaPrincipal.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {pathname: props.pathname};
    this.componentDidMount = this.componentDidMount.bind(this);
    this.render = this.render.bind(this);
    this.historyCallback = this.historyCallback.bind(this);
  }

  historyCallback(state, title, href) {
    console.log("location: " + document.location + ", state: " + JSON.stringify(state));    
  }

  componentDidMount() {
    history.onChange((state, title, pathname) => {
      console.log("history.onChange");
      this.historyCallback(state, title, pathname);
    });
    const esto = this;
    window.onpopstate = function(event) {
      console.log("window.onpopstate");
      esto.historyCallback(event.state, "", document.location);
    }
  }

  render() {
    return  <div className="App container-fluid">
              <div className="SearchForm">
                <SearchForm />
              </div>
              <div>
                <p>[{this.state.pathname}]</p>
              </div>
              <PaginaPrincipal />
            </div>
  }

}

export default App;


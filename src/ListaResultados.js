import React from 'react';
import BusquedaStore from './BusquedaStore.js';
import ListaRecetas from './ListaRecetas.js';
import ListaIngredientes from './ListaIngredientes.js';
import ListaCategorias from './ListaCategorias.js';

class ListaResultados extends React.Component {

    constructor() {
        super();
        this.state = {lista: []};
        this.componentDidMount = this.componentDidMount.bind(this);     
        this.onChange = this.onChange.bind(this);
        this.obtenerLista = this.obtenerLista.bind(this);
        this.render = this.render.bind(this);
    }

    onChange(b) {
        console.log(5);    
        const r = b.getResultado();
        console.log(r);
        this.setState({lista: b.getResultado()});
    }
        
    componentDidMount() {
        BusquedaStore.addNotify(this.onChange);
    }
        
    obtenerLista(lista) {
        return this.state.lista.filter(e => e.tipo === lista);
    }

    render() {
        console.log("01");
        return <div key="raiz">
                    <ListaRecetas obtenerLista={this.obtenerLista} />
                    <ListaIngredientes obtenerLista={this.obtenerLista}  />
                    <ListaCategorias obtenerLista={this.obtenerLista}  />
                </div>
    }
    
}

export default ListaResultados;
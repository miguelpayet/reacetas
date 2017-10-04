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
        this.obtenerClase = this.obtenerClase.bind(this);
        this.obtenerLista = this.obtenerLista.bind(this);
        this.render = this.render.bind(this);
    }

    onChange(b) {
        this.setState({lista: b.getResultado()});
    }
        
    componentDidMount() {
        BusquedaStore.addNotify(this.onChange);
    }
        
    obtenerClase(lista) {
        let total = 0;
        for(let i = 0; i < this.state.lista.length; i++) {
            if (this.state.lista[i].tipo === lista) {
                total++;
            }
        }
        return total === 0 ? "ocultar" : "mostrar";
    }

    obtenerLista(lista) {
        return this.state.lista.filter(e => e.tipo === lista);
    }

    render() {
        return <div key="raiz">
                    <ListaRecetas obtenerLista={this.obtenerLista} obtenerClase={this.obtenerClase} />
                    <ListaIngredientes obtenerLista={this.obtenerLista} obtenerClase={this.obtenerClase} />
                    <ListaCategorias obtenerLista={this.obtenerLista} obtenerClase={this.obtenerClase} />
                </div>
    }
    
}

export default ListaResultados;
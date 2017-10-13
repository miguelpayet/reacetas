import React from 'react';
import ListaRecetas from './ListaRecetas.js';
import ListaIngredientes from './ListaIngredientes.js';
import ListaCategorias from './ListaCategorias.js';
import LoadingIndicator from './LoadingIndicator.js';

class ListaResultados extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loading: false};
        this.estadoIndicador = this.estadoIndicador.bind(this);
        this.obtenerClase = this.obtenerClase.bind(this);
        this.obtenerLista = this.obtenerLista.bind(this);
        this.render = this.render.bind(this);
    }

    estadoIndicador() {
        return this.state.loading;
    }

    obtenerClase(lista) {
        let total = 0;
        for(let i = 0; i < this.props.estado().resultados.length; i++) {
            if (this.props.estado().resultados[i].tipo === lista) {
                total++;
            }
        }
        return total === 0 ? "ocultar" : "mostrar";
    }

    obtenerLista(lista) {
        return this.props.estado().resultados.filter(e => e.tipo === lista);
    }

    render() {
        return <div key="raiz" className="resultados">
                    <LoadingIndicator estado={this.estadoIndicador} />
                    <ListaRecetas obtenerLista={this.obtenerLista} obtenerClase={this.obtenerClase} titulo={true}/>
                    <ListaIngredientes obtenerLista={this.obtenerLista} obtenerClase={this.obtenerClase} />
                    <ListaCategorias obtenerLista={this.obtenerLista} obtenerClase={this.obtenerClase} />
                </div>
    }
    
}

export default ListaResultados;
import ListaRecetas from "./ListaRecetas.js";
import React from 'react';

class PaginaRecetas extends React.Component {

    constructor(props) {
        super(props)
        this.getBusqueda = this.getBusqueda.bind(this);
        this.getClase = this.getClase.bind(this);
        this.getLista = this.getLista.bind(this);
        this.getResultados = this.getResultados.bind(this);
        this.render = this.render.bind(this);
    }

    getBusqueda() {
        return this.props.estado().busqueda;
    }

    getClase(lista) {
        let total = 0;
        const resultados = this.getResultados();
        for (let i = 0; i < resultados.length; i++) {
            if (resultados[i].tipo === lista) {
                total++;
            }
        }
        return total === 0 ? "ocultar" : "mostrar";
    }

    getLista(lista) {
        const resultados = this.getResultados();
        return resultados.filter(e => e.tipo === lista);
    }

    getResultados() {
        const state = this.props.estado();
        return state.busqueda.resultados;
    }

    render() {
        return <div className="PaginaRecetas">
            <ListaRecetas busqueda={this.getBusqueda} lista={this.getLista} clase={this.getClase} titulo={true} verMas={false} />
        </div>
    }

}

export default PaginaRecetas;

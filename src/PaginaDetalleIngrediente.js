import ListaRecetas from "./ListaRecetas.js";
import React from 'react';

class PaginaDetalleIngrediente extends React.Component {

    constructor(props) {
        super(props);
        this.getBusqueda = this.getBusqueda.bind(this);
        this.getClase = this.getClase.bind(this);
        this.getLista = this.getLista.bind(this);
        this.getNombre = this.getNombre.bind(this);
        this.render = this.render.bind(this);
    }

    getBusqueda() {
        return this.props.estado().busqueda;
    }
    
    getClase() {
        return "receta";
    }

    getLista(tipo) {
        const estado = this.props.estado();
        return estado.recetas;
    }

    getNombre() {
        const estado = this.props.estado();
        return estado.ingrediente;
    }

    render() {
        return <div>
            <h1>recetas que contienen {this.getNombre()}</h1>
            <ListaRecetas busqueda={this.getBusqueda} lista={this.getLista} clase={this.getClase} titulo={false}/>
        </div>
    }

}

export default PaginaDetalleIngrediente;
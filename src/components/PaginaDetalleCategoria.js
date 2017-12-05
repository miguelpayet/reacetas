import ListaRecetas from "./ListaRecetas.js";
import React from 'react';

class PaginaDetalleCategoria extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.getClase = this.getClase.bind(this);
        this.getLista = this.getLista.bind(this);
        this.getNombre = this.getNombre.bind(this);
        this.getBusqueda = this.getBusqueda.bind(this);
    }
    
    getBusqueda() {
        return this.props.estado().busqueda;
    }

    getClase() {
        return "categoria";
    }

    getLista(tipo) {
        const estado = this.props.estado();
        console.log(estado.recetas);
        return estado.recetas;
    }

    getNombre() {
        const estado = this.props.estado();
        return estado.categoria;
    }

    render() {
        return <div className="PaginaDetalleCategoria">
            <h1>recetas que contienen {this.getNombre()}</h1>
            <ListaRecetas lista={this.getLista} clase={this.getClase} titulo={false}/>
        </div>
    }

}

export default PaginaDetalleCategoria;
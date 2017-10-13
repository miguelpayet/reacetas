import React from 'react';
import ListaRecetas from "./ListaRecetas.js";

class PaginaDetalleCategoria extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.obtenerClase = this.obtenerClase.bind(this);
        this.obtenerLista = this.obtenerLista.bind(this);
        this.obtenerNombre = this.obtenerNombre.bind(this);
    }

    obtenerClase() {
        return "categoria";
    }

    obtenerLista(tipo) {
        const estado = this.props.estado();
        console.log(estado.recetas);
        return estado.recetas;
    }

    obtenerNombre() {
        const estado = this.props.estado();
        return estado.categoria;
    }

    render() {
        return <div>
            <h1>recetas que contienen {this.obtenerNombre()}</h1>
            <ListaRecetas obtenerLista={this.obtenerLista} obtenerClase={this.obtenerClase} titulo={false}/>
        </div>
    }

}

export default PaginaDetalleCategoria;
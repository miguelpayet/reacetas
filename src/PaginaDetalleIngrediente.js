import React from 'react';
import ListaRecetas from "./ListaRecetas.js";

class PaginaDetalleIngrediente extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.obtenerClase = this.obtenerClase.bind(this);
        this.obtenerLista = this.obtenerLista.bind(this);
        this.obtenerNombre = this.obtenerNombre.bind(this);
    }

    obtenerClase() {
        return "receta";
    }

    obtenerLista(tipo) {
        const estado = this.props.estado();
        return estado.recetas;
    }

    obtenerNombre() {
        const estado = this.props.estado();
        return estado.ingrediente;
    }

    render() {
        return <div>
            <h1>recetas que contienen {this.obtenerNombre()}</h1>
            <ListaRecetas obtenerLista={this.obtenerLista} obtenerClase={this.obtenerClase} titulo={false}/>
        </div>
    }

}

export default PaginaDetalleIngrediente;
import React from 'react';
import BusquedaStore from './BusquedaStore.js';

class ListaRecetas extends React.Component {

    constructor() {
        super();
        this.state = {lista: []};
        this.onChange = this.onChange.bind(this);
    }

    buscar(b) {
        fetch(b.url())
        .then(response => response.json())
        .then(result => this.setLista(result))
        .catch(e => e);
    }

    componentDidMount() {
        BusquedaStore.addNotify(this.onChange);
    }

    onChange(b) {
        this.buscar(b);
    }

    render() {
        if (this.state.lista.length === 0) {
            return <div key="raiz"><p>no hay resultados</p></div>
        } else {
        const recetas = this.state.lista.filter((e) => e.tipo === 1);
        const insumos = this.state.lista.filter((e) => e.tipo === 2);
        const categorias = this.state.lista.filter((e) => e.tipo === 3);
        const markup = 
            <div key="raiz">
                {recetas.length > 0 && <div><h2>recetas</h2><ul>{recetas.map((e) => this.renderItem(e, "r"))}</ul></div>}
                {insumos.length > 0 && <div><h2>ingredientes</h2><ul>{insumos.map((e) => this.renderItem(e, "i"))}</ul></div>}
                {categorias.length > 0 && <div><h2>categorias</h2><ul>{categorias.map((e) => this.renderItem(e, "c"))}</ul></div>}            
            </div>
        return markup;
        }
    }

    renderItem(e, tipo) {
        return <li key={tipo + "-" + e.id}>{e.nombre}&nbsp;({e.cantidad}&nbsp;receta{e.cantidad === 1? "" : "s"})</li>;
    }

    setLista(result) {
        this.setState({lista: result});
    }

}

export default ListaRecetas;
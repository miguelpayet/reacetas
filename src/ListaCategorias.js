import React from 'react';
import RowCategorias from './RowCategorias.js';
import RowLeerMas from "./RowLeerMas.js";
import CrearId from "./funciones.js";

class ListaCategorias extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        const lista = this.props.obtenerLista(3);
        const filas = [];
        for (let i = 0; i <= lista.length; i += 4) {
            const rowid = CrearId("c", lista, i);
            filas.push(<RowCategorias key={rowid} categorias={lista.filter((value, index) => index >= i && index < i + 4)}/>);
            if (filas.length >= 3) {
                filas.push(<RowLeerMas key="c" nombre="categorías"/>);
                break;
            }
        }
        return  <div className={this.props.obtenerClase(3)}>
                    {filas.length > 0 && <h1 className="resultado">categorías</h1>}
                    {filas}
                </div>

    }
    
}

export default ListaCategorias;
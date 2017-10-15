import React from 'react';
import RowRecetas from './RowRecetas.js';
import RowLeerMas from "./RowLeerMas.js";
import CrearId from "./funciones.js";

class ListaRecetas extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        const lista = this.props.lista(1);
        const filas = [];
        for (let i = 0; i <= lista.length; i += 4) {
            const rowid = CrearId("r", lista, i);
            filas.push(<RowRecetas key={rowid} recetas={lista.filter((value, index) => index >= i && index < i + 4)} />);
            if (filas.length >= 3) {
                filas.push(<RowLeerMas busqueda={this.props.busqueda} key="r" nombre="recetas" />);
                break;
            }
        }
        return <div className={this.props.clase(1)}>
            {this.props.titulo && <h1 className="resultado">recetas</h1>}
            {filas}
        </div>
    }

}

export default ListaRecetas;
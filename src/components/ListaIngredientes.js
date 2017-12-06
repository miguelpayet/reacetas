import CrearId from "../util/CrearId.js";
import React from 'react';
import RowIngredientes from './RowIngredientes.js';
import RowLeerMas from "./RowLeerMas.js";

class ListaIngredientes extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        const lista = this.props.lista(2);
        const filas = [];
        for (let i = 0; i <= lista.length; i += 4) {
            const rowid = CrearId("i", lista, i);
            filas.push(<RowIngredientes key={rowid} ingredientes={lista.filter((value, index) => index >= i && index < i + 4)} />);
            if (this.props.verMas && filas.length >= 3) {
                filas.push(<RowLeerMas key={"i" + i} nombre="ingredientes" />);
                break;
            }
        }
        return <div className={this.props.clase(2)}>
            {filas.length > 0 && <h1 className="resultado">ingredientes</h1>}
            {filas}
        </div>

    }

}

export default ListaIngredientes;

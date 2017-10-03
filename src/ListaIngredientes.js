import React from 'react';
import RowIngredientes from './RowIngredientes.js';

class ListaIngredientes extends React.Component {

    render() {
        console.log("02");
        const lista = this.props.obtenerLista(2);
        const filas = [];
        for (let i = 0; i <= lista.length; i += 4) {
            let rowid="ing";
            for (let j = i; j <= i + 3 && j < lista.length; j++) {
                rowid += "-" + lista[j].id;
            };
            filas.push(<RowIngredientes key={rowid} ingredientes={lista.filter((value, index) => index >= i && index < i + 4)}/>);
        }
        return  <div>
                    {filas.length > 0 && <h1 className="resultado">ingredientes</h1>}
                    {filas}
                </div>

    }
    
}

export default ListaIngredientes;

import React from 'react';
import RowCategorias from './RowCategorias.js';

class ListaCategorias extends React.Component {

    render() {
        console.log("03");
        const lista = this.props.obtenerLista(3);
        const filas = [];
        for (let i = 0; i <= lista.length; i += 4) {
            let rowid = "cat";
            for (let j = i; j <= i + 3 && j < lista.length; j++) {
                rowid += "-" + lista[j].id;
            };
            filas.push(<RowCategorias key={rowid} categorias={lista.filter((value, index) => index >= i && index < i + 4)}/>);
        }
        return  <div>
                    {filas.length > 0 && <h1 className="resultado">categorias</h1>}
                    {filas}
                </div>

    }
    
}

export default ListaCategorias;
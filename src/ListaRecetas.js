import React from 'react';
import RowRecetas from './RowRecetas.js';

class ListaRecetas extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        console.log("04");
        const lista = this.props.obtenerLista(1);        
        const filas = [];
        for (let i = 0; i <= lista.length; i += 4) {
            let rowid = "";
            for (let j = i; j <= i + 3 && j < lista.length; j++) {
                rowid += "-" + lista[j].id;
            };
            filas.push(<RowRecetas key={rowid} recetas={lista.filter((value, index) => index >= i && index < i + 4)}/>);
        }
        return  <div>
                    <h1 className="resultado">recetas</h1>
                    {filas}
                </div>
    }

}

export default ListaRecetas;
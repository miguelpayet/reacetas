import React from 'react';
import RowRecetas from './RowRecetas.js';

class ListaRecetas extends React.Component {

    constructor(props) {
        super();
        this.state = props;
    }

    render() {
        const filas = [];
        for (let i = 0; i <= this.state.recetas.length; i += 4) {
            let rowid = "";
            for (let j = i; j <= i + 3 && j < this.state.recetas.length; j++) {
                rowid += "-" + this.state.recetas[j].id;
            };
            filas.push(<RowRecetas key={rowid} recetas={this.state.recetas.filter((value, index) => index >= i && index < i + 4)}/>);
        }
        return  <div>
                    <h1 className="resultado">recetas</h1>
                    {filas}
                </div>
    }

}

export default ListaRecetas;
import React from 'react';
import RowIngredientes from './RowIngredientes.js';

class ListaIngredientes extends React.Component {

    constructor(props) {
        super();
        this.state = {ingredientes: props.ingredientes};
    }

    render() {
        const filas = [];
        for (let i = 0; i <= this.state.ingredientes.length; i += 4) {
            let rowid="ing";
            for (let j = i; j <= i + 3 && j < this.state.ingredientes.length; j++) {
                rowid += "-" + this.state.ingredientes[j].id;
            };
            filas.push(<RowIngredientes key={rowid} ingredientes={this.state.ingredientes.filter((value, index) => index >= i && index < i + 4)}/>);
        }
        return  <div>
                    {filas.length > 0 && <h1 className="resultado">ingredientes</h1>}
                    {filas}
                </div>

    }
    
}

export default ListaIngredientes;

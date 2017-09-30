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
            filas.push(<RowIngredientes ingredientes={this.state.ingredientes.filter((value, index) => index >= i && index < i + 4)}/>);
        }
        return  <div>
                    <h1 className="resultado">ingredientes</h1>
                    {filas}
                </div>

    }
    
}

export default ListaIngredientes;

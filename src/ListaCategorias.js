import React from 'react';
import RowCategorias from './RowCategorias.js';

class ListaCategorias extends React.Component {

    constructor(props) {
        super();
        this.state = {categorias: props.categorias};
    }

    render() {
        const filas = [];
        for (let i = 0; i <= this.state.categorias.length; i += 4) {
            filas.push(<RowCategorias categorias={this.state.categorias.filter((value, index) => index >= i && index < i + 4)}/>);
        }
        return  <div className="resultado">
                    <h1>categorias</h1>
                    {filas}
                </div>

    }
    
}

export default ListaCategorias;
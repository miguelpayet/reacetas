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
            let rowid = "cat";
            for (let j = i; j <= i + 3 && j < this.state.categorias.length; j++) {
                rowid += "-" + this.state.categorias[j].id;
            };
            filas.push(<RowCategorias key={rowid} categorias={this.state.categorias.filter((value, index) => index >= i && index < i + 4)}/>);
        }
        return  <div>
                    {filas.length > 0 && <h1 className="resultado">categorias</h1>}
                    {filas}
                </div>

    }
    
}

export default ListaCategorias;
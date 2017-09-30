import React from 'react';
import Categoria from './Categoria.js';

class RowCategorias extends React.Component {
    
    constructor(props) {
        super();
        this.state = {categorias: props.categorias.map((value) => <Categoria datos={value}/>)};
    }

    render() {
        return  <div className="row">
                    {this.state.categorias}
                </div>
    }

}

export default RowCategorias;
import React from 'react';
import Categoria from './Categoria.js';

class RowCategorias extends React.Component {
    
    constructor(props) {
        super();
        const _categorias = props.categorias.map((value) => <Categoria key={value.id} datos={value}/>);
        this.state = {categorias: _categorias};
    }

    render() {
        return  <div className="row">
                    {this.state.categorias}
                </div>
    }

}

export default RowCategorias;
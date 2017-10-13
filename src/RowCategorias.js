import React from 'react';
import LinkCategoria from './LinkCategoria.js';

class RowCategorias extends React.Component {
    
    constructor(props) {
        super();
        const _categorias = props.categorias.map(
            (value) => <LinkCategoria key={value.id} id={value.id} nombre={value.nombre}/>
        );
        this.state = {categorias: _categorias};
    }

    render() {
        return  <div className="row">
                    {this.state.categorias}
                </div>
    }

}

export default RowCategorias;
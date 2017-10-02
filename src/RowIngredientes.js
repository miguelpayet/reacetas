import React from 'react';
import Ingrediente from './Ingrediente.js';

class RowIngredientes extends React.Component {

    constructor(props) {
        super();
        const _ingredientes = props.ingredientes.map((value) => <Ingrediente key={value.id} datos={value}/>);
        this.state = {ingredientes: _ingredientes};
    }

    render() {
        return  <div className="row">
                    {this.state.ingredientes}
                </div>
    }

}

export default RowIngredientes;

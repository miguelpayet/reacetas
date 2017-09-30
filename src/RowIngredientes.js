import React from 'react';
import Ingrediente from './Ingrediente.js';

class RowIngredientes extends React.Component {

    constructor(props) {
        super();
        this.state = {ingredientes: props.ingredientes.map((value) => <Ingrediente datos={value}/>)};
    }

    render() {
        return  <div className="row">
                    {this.state.ingredientes}
                </div>
    }

}

export default RowIngredientes;

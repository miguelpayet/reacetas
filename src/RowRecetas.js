import React from 'react';
import Receta from './Receta.js';

class RowRecetas extends React.Component {

    constructor(props) {
        super();
        const _recetas = props.recetas.map((value) => <Receta key={value.id} datos={value}/>);
        this.state = {recetas: _recetas};
    }

    render() {
        return  <div className="row">
                    {this.state.recetas}
                </div>
    }
}

export default RowRecetas;
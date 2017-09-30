import React from 'react';
import Receta from './Receta.js';

class RowRecetas extends React.Component {

    constructor(props) {
        super();
        this.state = {recetas: props.recetas.map((value) => <Receta datos={value}/>)};
    }

    render() {
        return  <div className="row">
                    {this.state.recetas}
                </div>
    }
}

export default RowRecetas;
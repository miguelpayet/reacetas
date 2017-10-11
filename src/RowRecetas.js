import React from 'react';
import LinkReceta from './LinkReceta.js';

class RowRecetas extends React.Component {

    constructor(props) {
        super(props);
        const r = props.recetas.map((value) => <LinkReceta key={value.id} datos={value}/>);
        this.state = {recetas: r};
    }

    render() {
        return  <div className="row">
                    {this.state.instrucciones}
                </div>
    }
}

export default RowRecetas;
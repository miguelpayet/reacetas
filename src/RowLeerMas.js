import React from 'react';
import LinkLeerMas from "./LinkLeerMas.js";

class RowLeerMas extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return <div className="col-md-12 col-sm-12">
            <LinkLeerMas nombre={this.props.nombre} />
        </div>

    }

}

export default RowLeerMas;
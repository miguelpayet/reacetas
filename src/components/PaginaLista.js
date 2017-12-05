import React from 'react';

class PaginaDetalleReceta extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        const l = this.props.estado().lista;
        return <div className="PaginaLista">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <h1>lista de recetas</h1>
                </div>
                <div className="col-md-12 col-sm-12">
                    <p>to-do</p>
                </div>
            </div>
        </div>
    }

}

export default PaginaDetalleReceta;
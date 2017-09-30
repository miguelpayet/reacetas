import React from 'react';

class Categoria extends React.Component {

    constructor(props) {
        super();
        this.state = {nombre: props.datos.nombre, id: props.datos.id};
    }

    render() {
        return  <div key={"c" + this.state.id} className="col-md-3 col-sm-6">
                    <div className="categoria">
                        <h2>{this.state.nombre}</h2>
                    </div>
                </div>
    }

}

export default Categoria;
import React from 'react';

class Ingrediente extends React.Component {

    constructor(props) {
        super();
        this.state = {nombre: props.datos.nombre, id: props.datos.id};
    }

    render() {
        return  <div key={"i" + this.state.id} className="col-md-3 col-sm-6">
                    <div className="ingrediente">
                        <h2>{this.state.nombre}</h2>
                    </div>
                </div>
    }

}

export default Ingrediente;

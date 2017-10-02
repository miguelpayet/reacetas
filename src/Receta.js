import React from 'react';

class Receta extends React.Component {

    constructor(props) {
        super();
        this.state = {nombre: props.datos.nombre, id: props.datos.id, descripcion: props.datos.descripcion};
    }

    getId() {
        return this.state.id;
    }

    render() {
        return  <div key={"r1" + this.state.id} className="col-md-3 col-sm-6">
                    <div key={"r1" + this.state.id} className="receta">
                        <h2 key={"t" + this.state.id}>{this.state.nombre}</h2>
                        <p key={"p" + this.state.id}>{this.state.descripcion}</p>
                    </div>
                </div>
    }
    
}

export default Receta;
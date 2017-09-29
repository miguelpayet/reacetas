import React from 'react';

class Receta extends React.Component {

    constructor(props) {
        console.log("5");
        console.log(props);
        super();
        this.state = {nombre: props.datos.nombre, id: props.datos.id, descripcion: props.datos.descripcion};
    }

    render() {
        console.log("6");
        return  <div key={"r" + this.state.id} className="col-md-3 col-sm-6">
                    <div className="receta">
                        <h2>{this.state.nombre}</h2>
                        <p>{this.state.descripcion}</p>
                    </div>
                </div>
    }
}

export default Receta;
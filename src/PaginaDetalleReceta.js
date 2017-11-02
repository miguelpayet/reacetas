import React from 'react';

class PaginaDetalleReceta extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        const r = this.props.estado().receta;
        return <div className="PaginaDetalleReceta">
            <h1>{r.nombre}</h1>
            <div className="descripcion"><p>{r.descripcion}</p></div>
            <div className="ingredientes">
                <h2>ingredientes</h2>
                <ul>
                    {r.ingredientes.map(i => <li id={i}>{i}</li>)}
                </ul>
            </div>
            <div className="instrucciones">
                <h2>instrucciones</h2>
                <div dangerouslySetInnerHTML={{ __html: r.instrucciones }}></div>
            </div>
        </div>
    }

}

export default PaginaDetalleReceta;
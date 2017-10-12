import React from 'react';

class PaginaDetalleReceta extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        const r = this.props.estado().receta;
        return  <div className="receta">
                    <h2>{r.nombre}</h2>
                    <div><p>{r.descripcion}</p></div>
                    <div>
                        <ul>
                            {r.ingredientes.map(i => <li>{i}</li>)}
                        </ul>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: r.instrucciones}}></div>
                </div>
    }

}

export default PaginaDetalleReceta;
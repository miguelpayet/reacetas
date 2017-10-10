import React from 'react';
import ListaResultados from './ListaResultados.js'

class PaginaPrincipal extends React.Component {

    render() {
        return <ListaResultados estado={this.props.estado} />
    }
}

export default PaginaPrincipal;
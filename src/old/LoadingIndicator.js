import React from "react";

class LoadingIndicator extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        const clase = this.props.estado() ? "mostrar" : "ocultar";
        return <img src="./src/images/loading.gif" className={clase} alt="Buscando resultados..."/>
    }

}

export default LoadingIndicator;
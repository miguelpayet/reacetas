import React from "react";
import Link from "./LinkLeerMas.js";

class LinkLeerMas extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.ejecutar = this.ejecutar.bind(this);
    }

    ejecutar() {
        console.log("hola");
    }

    render() {
        return <Link href={this.props.nombre} ejecutar={this.ejecutar}>Ver más {this.props.nombre}</Link>
    }

}

export default LinkLeerMas;
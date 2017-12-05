import React from "react";
import Link from "./Link.js";
import { history } from "../util";

class LinkLeerMas extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.ejecutar = this.ejecutar.bind(this);
    }

    ejecutar(event) {
        switch (this.props.nombre) {
            case "recetas":
                history.pushState(this.props.busqueda(), "", "/recetas?valor=" + this.props.busqueda().texto);
                break;
            case "ingredientes":
                history.pushState(this.props.busqueda(), "", "/recetas?valor=" + this.props.busqueda().texto);
                break;
            case "categorías":
                history.pushState(this.props.busqueda(), "", "/recetas?valor=" + this.props.busqueda().texto);
                break;
            default:
                console.log("default case");
                break;
        }
    }

    render() {
        return <Link href={this.props.nombre} ejecutar={this.ejecutar}>Ver más {this.props.nombre}</Link>
    }

}

export default LinkLeerMas;
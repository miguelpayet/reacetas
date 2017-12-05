import React from 'react';
import Link from "./Link.js";
import Ingrediente from "../Ingrediente.js";
import { history } from "../util";

class LinkIngrediente extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ingrediente: new Ingrediente(props) };
        this.render = this.render.bind(this);
        this.getId = this.getId.bind(this);
        this.ejecutar = this.ejecutar.bind(this);
    }

    ejecutar() {
        fetch(this.state.ingrediente.url())
            .then(response => response.json())
            .then(result => 
                {
                    const state = { recetas: result, ingrediente: this.state.ingrediente.nombre };
                    history.pushState(state, "", this.state.ingrediente.href());
                }
            )
            .catch(e => {
                console.log(e)
            });
    }

    getId() {
        return this.props.id;
    }

    render() {
        return <div className="col-md-3 col-sm-6">
            <div className="ingrediente">
                <Link ejecutar={this.ejecutar} href={this.state.ingrediente.href()}>
                    <h2>{this.props.nombre}</h2>
                </Link>
            </div>
        </div>
    }

}

export default LinkIngrediente;
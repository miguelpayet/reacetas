import React from 'react';
import Categoria from "./Categoria.js";
import {history} from "./util";
import Link from "./Link.js";

class LinkCategoria extends React.Component {

    constructor(props) {
        super(props);
        this.state = { categoria: new Categoria(props) };
        this.render = this.render.bind(this);
        this.getId = this.getId.bind(this);
        this.ejecutar = this.ejecutar.bind(this);
    }

    ejecutar() {
        fetch(this.state.categoria.url())
            .then(response => response.json())
            .then(result => 
                {
                    const state = { recetas: result, categoria: this.state.categoria.nombre };
                    history.pushState(state, "", this.state.categoria.href());
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
            <div className="categoria">
                <Link ejecutar={this.ejecutar} href={this.state.categoria.href()}>
                    <h2>{this.props.nombre}</h2>
                </Link>
            </div>
        </div>
    }

}

export default LinkCategoria;
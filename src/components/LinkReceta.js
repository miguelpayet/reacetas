import React from 'react';
import Link from "./Link.js";
import Receta from "../Receta.js";
import { history } from "../util";

class LinkReceta extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.getId = this.getId.bind(this);
        this.getUrl = this.getUrl.bind(this);
        this.ejecutar = this.ejecutar.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    ejecutar() {
        const r = new Receta(this.props);
        fetch(r.url())
            .then(response => {
                const state = {status: response.status};
                if (state.status !== 200) {
                    throw new Error("Estado: " + state.status + " - " + response.statusText);
                }
                response.json().then(data => {
                    state.receta = data;
                    history.pushState(state, "", this.getUrl());
                });
            })
            .catch(e => {
                console.log(e);
                history.pushState({ error: e }, "", "/error/");
            }
        );
    }

    handleClick() {
        history.push(this.getUrl());
        return false;
    }

    getId() {
        return this.props.datos.id;
    }

    getUrl() {
        return "/receta?id=" + this.getId();
    }

    render() {
        return <div className="col-md-3 col-sm-6">
            <div className="receta">
                <Link ejecutar={this.ejecutar} href={this.getUrl()}>
                    <h2>{this.props.datos.nombre}</h2>
                    <p>{this.props.datos.descripcion}</p>
                </Link>
            </div>
        </div>
    }

}

export default LinkReceta;
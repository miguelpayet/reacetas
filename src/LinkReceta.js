import React from 'react';
import Link from "./Link.js";
import Receta from "./Receta.js";
import {history} from "./util";

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
            .then(response => response.json())
            .then(result => history.pushState({result}, "", this.href))
            .catch(e => console.log(e));
    }

    handleClick() {
        history.push(this.getUrl());
        return false;
    }

    getId() {
        return this.props.id;
    }

    getUrl() {
        return "/receta?id=" + this.getId();
    }

    render() {
        return  <div key={"r1" + this.props.id} className="col-md-3 col-sm-6">
                    <div key={"r1" + this.props.id} className="receta">
                        <Link ejecutar={this.ejecutar}>
                            <h2 key={"t" + this.props.id}>{this.props.nombre}</h2>
                            <p key={"p" + this.props.id}>{this.props.descripcion}</p>
                        </Link>
                    </div>
                </div>
    }
    
}

export default LinkReceta;
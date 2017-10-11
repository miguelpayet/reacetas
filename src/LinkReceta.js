import React from 'react';
import Link from "./Link.js";
import {history} from "./util";

class LinkReceta extends React.Component {

    constructor(props) {
        super();
        this.state = {nombre: props.datos.nombre, id: props.datos.id, descripcion: props.datos.descripcion};
        this.render = this.render.bind(this);
        this.getId = this.getId.bind(this);
        this.getUrl = this.getUrl.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        history.push(this.getUrl());
        return false;
    }

    getId() {
        return this.state.id;
    }

    getUrl() {
        return "/receta?id=" + this.getId();
    }

    render() {
        return  <div key={"r1" + this.state.id} className="col-md-3 col-sm-6">
                    <div key={"r1" + this.state.id} className="receta">
                        <Link href={this.getUrl()}>
                            <h2 key={"t" + this.state.id}>{this.state.nombre}</h2>
                            <p key={"p" + this.state.id}>{this.state.descripcion}</p>
                        </Link>
                    </div>
                </div>
    }
    
}

export default LinkReceta;
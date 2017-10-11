import React from 'react';
import MiComponente from './MiComponente.js';

class CampoBuscar extends MiComponente {

    constructor() {
        super();
        this.state = {texto: ""};
        this.handleChange = this.handleChange.bind(this);
        this.render = this.render.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    render() {
        return (
            <p className="buscar">
                <input type="text" id="texto" name="texto" placeholder="¿Qué estás buscando?" onChange={this.handleChange} />
                <button type="submit" className="btn btn-light btn-xs">
                    <span className="fa fa-search"></span>
                </button>                
            </p>
        );
    }
}
  
export default CampoBuscar;

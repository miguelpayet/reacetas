import React from 'react';

class CampoBuscar extends React.Component {

    handleSubmit(event) {
        console.log("buscar");
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

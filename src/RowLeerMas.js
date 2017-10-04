import React from "react";

class RowLeerMas extends React.Component {

    render() {
        return <div className="row">
                    <div className="col-md-12 col-sm-12">Ver más {this.props.nombre}</div>
                </div>
    }

}

export default RowLeerMas;
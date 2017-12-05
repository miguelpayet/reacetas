import React from "react";
import LinkIngrediente from "./LinkIngrediente.js";

class RowIngredientes extends React.Component {

    constructor(props) {
        super();
        this.state = {ingredientes: props.ingredientes.map(
            (value) => <LinkIngrediente key={value.id} id={value.id} nombre={value.nombre}/>
        )};
    }

    render() {
        return  <div className="row">
                    {this.state.ingredientes}
                </div>
    }

}

export default RowIngredientes;

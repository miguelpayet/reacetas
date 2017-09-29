import React from 'react';
import RowRecetas from './RowRecetas.js';

class ListaRecetas extends React.Component {

    constructor(props) {
        console.log("1");
        super();
        this.state = props;
    }

    render() {
        console.log("2");
        const filas = [];
        for (let i = 0; i <= this.state.recetas.length; i += 4) {
            const r = this.state.recetas.filter((value, index) => {return index >= i && index < i + 4});
            filas.push(<RowRecetas recetas={r}/>);
        }
        return  <div>
                    <h1>recetas</h1>
                    {filas}
                </div>
    }

}

export default ListaRecetas;
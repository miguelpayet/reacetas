import React from 'react';

class PaginaError extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        //const e = this.props.estado().error;
        return <div className="PaginaError">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <h1>¡error!</h1>
                </div>
                <div className="col-md-12 col-sm-12">
                    <h2>descripción del error</h2>
                    <p>to-do</p>
                </div>
            </div>
        </div>
    }

}

export default PaginaError;
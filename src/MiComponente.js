import React from 'react';

class MiComponente extends React.Component {

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }
      
}

export default MiComponente;

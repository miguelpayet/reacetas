class Busqueda {

    constructor(props) {
        this.id = props.datos.id;
        this.url = this.url.bind(this);
    }

    url() {
        return `${Busqueda.PATH_BASE}${Busqueda.PATH_SEARCH}${this.id}`;
    }

}

Busqueda.PATH_BASE = 'http://recetadebrownes.xyz';
Busqueda.PATH_SEARCH = '/receta?id=';

export default Busqueda

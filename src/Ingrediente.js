import { config } from './util';

class Ingrediente {

    constructor(props) {
        this.id = props.id;
        this.nombre = props.nombre;
        this.href = this.href.bind(this);
        this.url = this.url.bind(this);
    }

    href() {
        return `${Ingrediente.PATH_HREF}${this.id}`;
    }

    url() {
        const _url = `${config.PATH_BASE}${Ingrediente.PATH_SEARCH}${this.id}`;
        return _url;
    }

}

Ingrediente.PATH_SEARCH = '/insumo/recetas/';
Ingrediente.PATH_HREF = '/insumo?id=';

export default Ingrediente;

class Receta {

    constructor(props) {
        this.id = props.datos.id;
        this.url = this.url.bind(this);
    }

    url() {
        return `${Receta.PATH_BASE}${Receta.PATH_SEARCH}${this.id}`;
    }

}

Receta.PATH_BASE = 'http://recetadebrownes.xyz';
Receta.PATH_SEARCH = '/receta?id=';

export default Receta

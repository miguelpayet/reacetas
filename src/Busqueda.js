class Busqueda {

    constructor(props) {
        this.texto = props.texto;
        this.recetas = props.recetas;
        this.ingredientes = props.ingredientes;
        this.categorias = props.categorias;
        this.flags = (this.recetas ? "1" : "0") + (this.ingredientes ? "1" : "0") + (this.categorias ? "1" : "0");
    }

    url() {
        const url = `${Busqueda.PATH_BASE}${Busqueda.PATH_SEARCH}${this.texto}${Busqueda.PARAM_FLAGS}${this.flags}`;
        return url;
    }
}

Busqueda.PATH_BASE = 'http://recetadebrownes.xyz';
Busqueda.PATH_SEARCH = '/palabra?texto=';
Busqueda.PARAM_FLAGS = '&flag=';

export default Busqueda
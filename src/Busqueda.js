import { config } from './util';

class Busqueda {

    constructor(props) {
        this.categorias = props.categorias;
        this.ingredientes = props.ingredientes;
        this.recetas = props.recetas;
        this.resultados = [];
        this.texto = props.texto;
        this.flags = (this.recetas ? "1" : "0") + (this.ingredientes ? "1" : "0") + (this.categorias ? "1" : "0");
        this.url = `${config.PATH_BASE}${Busqueda.PATH_SEARCH}${this.texto}${Busqueda.PARAM_FLAGS}${this.flags}`; 
    }

}

Busqueda.PATH_SEARCH = '/palabra?texto=';
Busqueda.PARAM_FLAGS = '&flag=';

export default Busqueda
class Busqueda {

    constructor(props) {
        this.texto = props.texto;
        this.recetas = props.recetas;
        this.ingredientes = props.ingredientes;
        this.categorias = props.categorias;
        this.resultado = [];
        this.flags = (this.recetas ? "1" : "0") + (this.ingredientes ? "1" : "0") + (this.categorias ? "1" : "0");
        this.url = this.url.bind(this);
        this.getResultado = this.getResultado.bind(this);
        this.setResultado = this.setResultado.bind(this);
    }
  
    getResultado() {
        return this.resultado;
    }

    setResultado(_resultado) {
        console.log(_resultado);
        this.resultado = _resultado;
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
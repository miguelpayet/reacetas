class Categoria {

    constructor(props) {
        this.id = props.id;
        this.nombre = props.nombre;
        this.href = this.href.bind(this);
        this.url = this.url.bind(this);
    }

    href() {
        return `${Categoria.PATH_HREF}${this.id}`;
    }

    url() {
        return `${Categoria.PATH_BASE}${Categoria.PATH_SEARCH}${this.id}`;
    }

}

Categoria.PATH_BASE = 'http://recetadebrownes.xyz';
Categoria.PATH_SEARCH = '/categoria/recetas?id=';
Categoria.PATH_HREF = '/categoria?id=';

export default Categoria;

  class Router {

    constructor(_rutas) {
        this.rutas = _rutas;
    }

    resolver(href) {
        for (let i = 0; i < this.rutas.length; i++) {
            if (this.rutas[i].path.test(href)) {
                return {componente: this.rutas[i].componente}
            }
          }
      
    }

  }

  export default Router;

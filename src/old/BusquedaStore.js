import {history} from './util';

class BusquedaStore {

    static addNotify(algo) {
        BusquedaStore.notify.push(algo);
    }

    static getBusqueda() {
        if (BusquedaStore.state.busquedas.length > 0) {
            return BusquedaStore.state.busquedas.shift();
        } else {
            return undefined;
        }
    }
      
    static getState() {
      return BusquedaStore.state;
    }

    static iniciarBusqueda() {
        BusquedaStore.onChange(1);
    }

    static onChange(evento) {
        if (evento === 1) {
            //history.pushState({buscando: true}, "", "/");
        } else if (evento === 2) {
            const b = BusquedaStore.getBusqueda();
            history.pushState({buscando: false, resultados: b.getResultado()}, "", "/busqueda?valor=" + b.texto);
        }
    }
  
    static terminarBusqueda(busqueda) {
      BusquedaStore.state.busquedas.push(busqueda);
      BusquedaStore.onChange(2);
    }

}

BusquedaStore.state = {busquedas: []};
BusquedaStore.notify = [];

export default BusquedaStore; 
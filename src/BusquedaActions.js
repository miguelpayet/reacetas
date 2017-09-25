import BusquedaStore from './BusquedaStore.js';

class BusquedaActions  {
    
    static addBusqueda(busqueda) {
        BusquedaStore.addBusqueda(busqueda);
    }
    
}

export default BusquedaActions;
    
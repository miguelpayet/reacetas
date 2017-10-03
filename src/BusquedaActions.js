import BusquedaStore from './BusquedaStore.js';

class BusquedaActions  {

    static addBusqueda(b) {
        console.log(2);        
        BusquedaActions.buscar(b);
    }
  
    static buscar(b) {
        console.log(3);        
        fetch(b.url())
        .then(response => response.json())
        .then(result => {b.setResultado(result); BusquedaStore.addBusqueda(b)})
        .catch(e => console.log(e));
    }

}

export default BusquedaActions;

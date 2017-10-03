class BusquedaStore {

    static addNotify(algo) {
        BusquedaStore.notify.push(algo);
    }
    
    static getState() {
      return BusquedaStore.state;
    }
  
    static addBusqueda(busqueda) {
      console.log(4);        
      BusquedaStore.state.busquedas.push(busqueda);
      BusquedaStore.onChange();
    }

    static getBusqueda() {
        if (BusquedaStore.state.busquedas.length > 0) {
            return BusquedaStore.state.busquedas.shift();
        } else {
            return undefined;
        }
    }
  
    static onChange() {
        const b = BusquedaStore.getBusqueda();
        BusquedaStore.notify.forEach(function(n){n.call(null, b);});
    }
  }

  BusquedaStore.state = {busquedas: []};
  BusquedaStore.notify = [];

  export default BusquedaStore; 
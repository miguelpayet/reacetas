function CrearId(tipo, lista, i) {
    let rowid = tipo;
    for (let j = i; j <= i + 3 && j < lista.length; j++) {
        rowid += "-" + lista[j].id;
    };
    return rowid;
}

export default CrearId;

const onChangeListeners = [];

function pushState(objeto, titulo, pathname) {
    window.history.pushState(objeto, titulo, pathname);
    onChangeListeners.forEach(callback => callback(objeto, titulo, pathname));
}

export default {
    pushState,
    onChange: cb => onChangeListeners.push(cb),
};
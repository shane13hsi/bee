function makeHot(alt, Store) {
  let name = arguments[2] === undefined ? Store.displayName : arguments[2];

  return (()=> {
    if (module.hot) {
      if (alt.stores[name]) delete alt.stores[name];
    }
    return alt.createStore(Store, name);
  })();
}

export default makeHot;
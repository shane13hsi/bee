/**
 * @see https://github.com/goatslacker/alt/issues/29
 * @see https://github.com/goatslacker/alt/issues/85
 *
 * @note 另外，提供的 util  方法，module.hot.dispose 无法运行
 * */
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
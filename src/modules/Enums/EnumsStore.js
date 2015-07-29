import makeHot from '../../utils/makeHot';
import alt from '../../alt';
import EnumsActions from './EnumsActions';

function EnumsStore() {
  this.bindActions(EnumsActions);
  this.enums = {};
}

Object.assign(EnumsStore.prototype, {
  fetchedEnums(enums) {
    this.enums = Object.assign(this.enums, enums);
  }
});

export default makeHot(alt, EnumsStore, 'EnumsStore');

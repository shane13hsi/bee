import alt from '../../alt';
import {getJSON} from '../../utils/http';

function EnumsActions() {
  this.generateActions('fetchedEnums');
}

Object.assign(EnumsActions.prototype, {
  fetchEnums() {
    return getJSON('/enums')
      .then((json)=> this.actions.fetchedEnums(json));
  }
});

export default alt.createActions(EnumsActions);

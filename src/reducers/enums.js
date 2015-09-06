import { REQUEST_ENUMS, RECEIVE_ENUMS } from '../actions/counter';

export default function enums(state = {}, action = {}) {
  switch (action.type) {
    case REQUEST_ENUMS:
      return state;
    case RECEIVE_ENUMS:
      return Object.assign({}, state, action.enums);
    default:
      return state;
  }
}

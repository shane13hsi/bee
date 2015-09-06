import { REQUEST_ENUMS, RECEIVE_ENUMS } from '../actions/enums';

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

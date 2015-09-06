import http from 'axios';

export const REQUEST_ENUMS = 'REQUEST_ENUMS';
export const RECEIVE_ENUMS = 'RECEIVE_ENUMS';

function requestEnum() {
  return {
    type: REQUEST_ENUMS
  }
}

function receiveEnums(json) {
  return {
    type: RECEIVE_ENUMS,
    enums: json,
    receivedAt: Date.now()
  };
}

export function fetchEnums() {
  return dispatch => {
    dispatch(requestEnum());

    return http.get('/enums')
      .then(res => dispatch(receiveEnums(res.data)));
  };
}

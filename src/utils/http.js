import superAgent from 'superagent';
import superAgentPromise from 'superagent-promise';
const agent = superAgentPromise(superAgent, Promise);

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

const json = (response) => {
  if (response.status !== 204) {
    return response.body;
  } else {
    return {};
  }
};

const http = {
  getJSON(url) {
    return agent
      .get(url)
      .accept('application/json')
      .then(status)
      .then(json);
  },

  postJSON(url, data) {
    return agent
      .post(url)
      .send(data)
      .accept('application/json')
      .then(status)
      .then(json);
  }
};

export default http;

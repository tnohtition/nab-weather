import axios from 'axios';

class Service {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get(params = {}) {
    return axios.get(this.endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    });
  }
}

export default Service;

import Service from 'services';

class CorsService extends Service {
  constructor(endpoint) {
    const corsEndpoint = `https://cors-anywhere.herokuapp.com/`;
    super(`${corsEndpoint}${endpoint}`);
  }
}

export default CorsService;

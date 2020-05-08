
class MetaweatherService {
  constructor() {
    this.endpoint = 'https://www.metaweather.com/api';
  }

  get(params) {
    return fetch(this.endpoint, {
      mode: 'no-cors'
    });
  }
}


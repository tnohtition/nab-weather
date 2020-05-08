
class MetaweatherLocationSearcherService {
  constructor() {
    this.endpoint = 'https://www.metaweather.com/api/location/search';
  }

  get(params) {
    const url = new URL(this.endpoint);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url, {
      mode: 'no-cors'
    });
  }
}

export default MetaweatherLocationSearcherService;

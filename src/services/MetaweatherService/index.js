import CorsService from 'services/CorsService';

class MetaweatherService extends CorsService {
  constructor(woeid, date) {
    const endpoint = `https://www.metaweather.com/api/location/${woeid}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    super(endpoint);
  }
}

export default MetaweatherService;

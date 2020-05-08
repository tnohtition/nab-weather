import CorsService from 'services/CorsService';

class MetaweatherLocationSearcherService extends CorsService {
  constructor() {
    super(`https://www.metaweather.com/api/location/search`);
  }
}

export default MetaweatherLocationSearcherService;

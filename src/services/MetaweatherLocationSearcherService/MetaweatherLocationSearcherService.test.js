import axios from 'axios';
import MetaweatherLocationSearcherService from './';

jest.mock('axios');

describe('MetaweatherLocationSearcherService', () => {
  it('fetches successfully data from an API', async () => {
    const data = [
      {
        title: 'Ho Chi Minh',
        woeid: 12345
      },
      {
        title: 'London',
        woeid: 111
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    const service = new MetaweatherLocationSearcherService();
    await expect(service.get()).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    const service = new MetaweatherLocationSearcherService();

    await expect(service.get()).rejects.toThrow(errorMessage);
  });
});

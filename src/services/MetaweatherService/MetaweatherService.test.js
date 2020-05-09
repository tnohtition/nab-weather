import axios from 'axios';
import MetaweatherService from './';

jest.mock('axios');

describe('MetaweatherService', () => {
  it('fetches successfully data from an API', async () => {
    const data = [
      {
        max_temp: 39,
        min_temp: 10
      },
      {
        max_temp: 30,
        min_temp: 2
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    const service = new MetaweatherService(123, new Date());
    await expect(service.get()).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    const service = new MetaweatherService(123, new Date());

    await expect(service.get()).rejects.toThrow(errorMessage);
  });
});

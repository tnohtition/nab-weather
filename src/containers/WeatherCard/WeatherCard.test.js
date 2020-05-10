import React from 'react';
import { shallow } from 'enzyme';
import { dayOfWeeks } from 'constants/Dates';
import {WeatherCard} from './index';
import Fetching from 'components/Fetching';
import NotFound from 'components/NotFound';
import Temperature from 'components/Temperature';

describe('WeatherCard containers', () => {
  it('contains right day', () => {
    const date = new Date(2020, 2, 2); // Mon Mar 02 2020 00:00:00
    const weatherCard = shallow(<WeatherCard date={date}/>);
    expect(weatherCard.text().toLowerCase() === 'monday').toEqual(true);
  });

  it('contains default day', () => {
    const defaultDate = new Date();
    const weatherCard = shallow(<WeatherCard />);
    expect(weatherCard.text().toLowerCase() === dayOfWeeks[defaultDate.getDay()].toLowerCase()).toEqual(true);
  });

  it('contains Fetching', () => {
    const weatherCard = shallow(<WeatherCard fetching />);
    expect(weatherCard.containsMatchingElement(<Fetching />)).toEqual(true);
  });

  it('do not contains Fetching', () => {
    const weatherCard = shallow(<WeatherCard />);
    expect(weatherCard.containsMatchingElement(<Fetching />)).toEqual(false);
  });

  it('do not contains neither Not Found nor Temperature cause of woeid', () => {
    const weatherCard = shallow(<WeatherCard />);
    expect(weatherCard.containsMatchingElement(<NotFound />)).toEqual(false);
    expect(weatherCard.containsMatchingElement(<Temperature />)).toEqual(false);
  });

  it('do not contains neither Not Found nor Temperature cause of weather', () => {
    const weatherCard = shallow(<WeatherCard weather={null}/>);
    expect(weatherCard.containsMatchingElement(<NotFound />)).toEqual(false);
    expect(weatherCard.containsMatchingElement(<Temperature />)).toEqual(false);
  });

  it('contains Not Found', () => {
    const weatherCard = shallow(<WeatherCard woeid={123} weather={[]}/>);
    expect(weatherCard.containsMatchingElement(<NotFound />)).toEqual(true);
  });

  it('contains Temperature', () => {
    const weatherCard = shallow(<WeatherCard
      woeid={123}
      weather={[
        { max_temp: 30, min_temp: 10 }
      ]}
      />
    );
    expect(weatherCard.containsMatchingElement(<Temperature />)).toEqual(true);
  });

  it('contains min format Temperature', () => {
    const weatherData = [
      { max_temp: 33.2222222, min_temp: 10 }
    ];
    const weatherCard = shallow(<WeatherCard
      woeid={123}
      weather={weatherData}
    />
    );
    expect(weatherCard.containsMatchingElement(<Temperature min={"10.00"} />)).toEqual(true);
  });

  it('contains max format Temperature', () => {
    const weatherData = [
      { max_temp: 33.2222222, min_temp: 10 }
    ];
    const weatherCard = shallow(<WeatherCard
      woeid={123}
      weather={weatherData}
    />
    );
    expect(weatherCard.containsMatchingElement(<Temperature max={"33.22"}/>)).toEqual(true);
  });

  it('contains average min Temperature', () => {
    const weatherData = [
      { max_temp: 30, min_temp: 1 },
      { max_temp: 30, min_temp: 2 },
      { max_temp: 30, min_temp: 3 },
      { max_temp: 30, min_temp: 4 },
      { max_temp: 30, min_temp: 5 },
    ];
    const avegage = "3.00";
    const weatherCard = shallow(<WeatherCard
      woeid={123}
      weather={weatherData}
      />
    );
    expect(weatherCard.containsMatchingElement(<Temperature min={avegage}/>)).toEqual(true);
  });

  it('contains average max Temperature', () => {
    const weatherData = [
      { max_temp: 1, min_temp: 1 },
      { max_temp: 2, min_temp: 2 },
      { max_temp: 3, min_temp: 3 },
      { max_temp: 4, min_temp: 4 },
      { max_temp: 5, min_temp: 5 },
    ];
    const avegage = "3.00";
    const weatherCard = shallow(<WeatherCard
      woeid={123}
      weather={weatherData}
      />
    );
    expect(weatherCard.containsMatchingElement(<Temperature max={avegage}/>)).toEqual(true);
  });
});

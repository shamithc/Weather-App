import React, { Component } from 'react';
import SearchBox from '../containers/search_box';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <WeatherList />
      </div>
    );
  }
}

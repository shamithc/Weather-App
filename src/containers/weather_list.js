import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeatherData(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map((weather) => { return weather.main.temp } );
        const pressures = cityData.list.map((weather) => { return weather.main.pressure } );
        const humidites = cityData.list.map((weather) => { return weather.main.humidity } );
        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={ name }>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="orange" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hPa" />
                </td>
                <td>
                    <Chart data={humidites} color="red" units="%" />
                </td>
            </tr>
        )
    }

    render() {
        // console.log('Props :', this.props);

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperayure(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeatherData)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather};
}

export default connect(mapStateToProps)(WeatherList);
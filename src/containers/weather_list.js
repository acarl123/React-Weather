import React, {Component} from 'react';
import {connect} from 'react-redux';

import GoogleMap from '../components/map'
import Chart from '../components/chart'

class WeatherList extends Component {
	render() {
		return (
			<table className="table table-hover">
				<thead>
				<tr>
					<th>City</th>
					<th>Temperature (F)</th>
					<th>Pressure (hPa)</th>
					<th>Humidity (%)</th>
				</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}

	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp*(9/5) - 459.67);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return (
			<tr key={cityData.city.id}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="F"/></td>
				<td><Chart data={pressures} color="blue" units="hPa"/></td>				
				<td><Chart data={humidities} color="green" units="%"/></td>
			</tr>
		);
	}
}

function mapStateToProps({weather}) { // state.weather
	return {weather};  // {weather: weather}
}

export default connect(mapStateToProps)(WeatherList)
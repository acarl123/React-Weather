import axios from 'axios';

const WEATHER_API_KEY = '729a20f0c4b0caf8fbc260e713b4c781';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
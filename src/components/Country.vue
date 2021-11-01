<template>
	<div>
		<h1>{{ $route.params.country }} || {{ countries.capital[0] }}</h1>
		<h2>Crime index: {{ countryIndices[0].crime_index }}</h2>
		<h2>Safety index: {{ countryIndices[0].safety_index }}</h2>
		<h2>Rent index: {{ countryIndices[0].rent_index }}</h2>
		<h2>QOL index: {{ countryIndices[0].quality_of_life_index }}</h2>
		<h3>Timezone: {{ countryWeather[0].timezone }}</h3>
		<h3>Current Temperature: {{ countryWeather[0].temp }}</h3>
		<h3>
			Current Weather Conditions:
			{{ countryWeather[0].weather.description }}
		</h3>
		<h3>Local Date and Time: {{ countryWeather[0].datetime }}</h3>
	</div>
</template>

<script>
import axios from "axios";

const numeboAPI_KEY = "0letfhyfmgat4h";
const weatherbitAPI_KEY = "28b7de7d6e844ad7889654ce3d62f0db";

const weatherbitURL = "https://api.weatherbit.io/v2.0/current?";
const numeboURL = "https://www.numbeo.com/api/";
const restcountriesURL = "https://restcountries.com/v3.1/";

export default {
	name: "Country",
	data() {
		return {
			countries: [],
			countryIndices: [],
			countryWeather: []
		};
	},
	mounted() {
		this.getCountries();
		this.getIndices();
	},
	methods: {
		getCountries() {
			axios
				.get(
					`${restcountriesURL}name/${this.$route.params.country}?fullText=true`
				)
				.then(response => {
					console.log(response.data);
					this.countries = response.data[0];
					this.getWeather();
				})
				.catch(error => console.log(error));
		},
		getIndices() {
			axios
				.get(
					`${numeboURL}indices?api_key=${numeboAPI_KEY}&query=${this.countries.capital}`
				)
				.then(response1 => {
					console.log([response1.data]);
					this.countryIndices = [response1.data];
				})
				.catch(error1 => console.log(error1));
		},
		getWeather() {
			let fixedCapital = this.countries.capital[0];
			fixedCapital = fixedCapital.replace(/\s+/g, "");
			axios
				.get(
					`${weatherbitURL}city=${fixedCapital}&key=${weatherbitAPI_KEY}`
				)
				.then(response2 => {
					console.log(response2.data.data);
					this.countryWeather = response2.data.data;
				})
				.catch(error2 => console.log(error2));
		}
	}
};
</script>

<style></style>

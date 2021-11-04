<template>
	<b-card-group columns>
		<CountryViewer
			v-for="country in countries"
			:key="country.ccn3"
			:country="country"
		/>
	</b-card-group>
</template>

<script>
import axios from "axios";
import CountryViewer from "@/components/CountryViewer";

export default {
	name: "AllCountries",
	components: {
		CountryViewer
	},
	data() {
		return {
			countries: []
		};
	},
	mounted() {
		axios
			.get(
				"https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags"
			)
			.then(response => {
				console.log(response.data);
				this.countries = response.data;
			})
			.catch(error => console.log(error));
	}
};
</script>

<style></style>

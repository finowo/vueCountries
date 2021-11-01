<template>
	<div>
		<p>
			Name:
			<router-link
				:to="{
					name: 'country',
					params: {
						country: country.name.official,
						capital: country.capital[0]
					}
				}"
				>{{ country.name.common }}</router-link
			>
		</p>
		<p>
			Flag:
			{{ country.flag }}
		</p>
		<p>Capital: {{ country.capital[0] }}</p>
		<hr />
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "CountryViewer",
	mounted() {
		axios
			.get(
				`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`
			)
			.then(response => {
				console.log(response.data);
				this.countries = response.data;
			})
			.catch(error => console.log(error));
	},
	props: {
		country: Object
	}
};
</script>

<style></style>

<template>
	<b-card
		:title="country.name.official"
		:img-src="country.flags.png"
		img-alt="Image"
		img-top
		tag="country"
	>
		<b-card-text>
			{{ country.capital[0] }} is the capital of this country and this is
			filler text.
		</b-card-text>

		<router-link
			:to="{
				name: 'country',
				params: {
					country: country.name.official,
					capital: country.capital[0]
				}
			}"
			>View</router-link
		>
	</b-card>
</template>

<script>
export default {
	name: "CountryViewer",
	mounted() {},
	props: {
		country: Object
	}
};
</script>

<style>
country.card {
	display: inline-block;
	margin-bottom: 20px;
}
</style>

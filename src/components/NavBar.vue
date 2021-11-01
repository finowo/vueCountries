<template>
	<div>
		<router-link :to="{ name: 'Home' }">Home</router-link>
		|
		<router-link :to="{ name: 'AllCountries' }">All</router-link>
	</div>
</template>

<script>
export default {
	name: "NavBar"
};
</script>

<style></style>

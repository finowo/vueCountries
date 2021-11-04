<template>
	<b-container id="app">
		<NavBar />
		<b-row>
			<b-col>
				<router-view />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
	name: "App",
	components: {
		NavBar
	}
};
</script>

<style>
@media (min-width: 34em) {
	.card-columns {
		-webkit-column-count: 2;
		-moz-column-count: 2;
		column-count: 2;
	}
}
@media (min-width: 48em) {
	.card-columns {
		-webkit-column-count: 3;
		-moz-column-count: 3;
		column-count: 3;
	}
}
@media (min-width: 62em) {
	.card-columns {
		-webkit-column-count: 3;
		-moz-column-count: 3;
		column-count: 3;
	}
}
@media (min-width: 75em) {
	.card-columns {
		-webkit-column-count: 3;
		-moz-column-count: 3;
		column-count: 3;
	}
}
</style>

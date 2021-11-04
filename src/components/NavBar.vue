<template>
	<nav class="navbar navbar-expand-md sticky-top navbarColor">
		<div class="container">
			<ul class="navbar-nav">
				<li>
					<router-link class="nav-link" :to="{ name: 'Home' }"
						><img
							src="../assets/home.svg"
							width="40"
							alt="home"
						/><span class="homeText link1"
							>VueCountries</span
						></router-link
					>
				</li>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'AllCountries' }"
						><span class="navLinkText link2"
							>All Countries</span
						></router-link
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						<span class="navLinkText link3">About Me</span></a
					>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar"
};
</script>

<style></style>

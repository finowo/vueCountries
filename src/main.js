import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/app.css";
// import "./js/script.js";
import BootstrapVue from "bootstrap-vue";
import Bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue, Bootstrap);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");

import "semantic-ui-css/semantic.min.css";
// import "../semantic/dist/semantic.min.css";

import SuiVue from "semantic-ui-vue";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";

// Create vue instance
const app = createApp(App);

app.use(router);
// Install the plugin first
app.use(store);

app.use(SuiVue);
// Mount your app
app.mount("#app");

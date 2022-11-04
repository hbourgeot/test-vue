import { createApp } from "vue";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);
import App from "./App.vue";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import main_import_all from "@/config/help/main_import_all";
let app = createApp(App);
main_import_all(app);
app.mount("#app");

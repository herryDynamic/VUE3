import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import store from "./store/index";

// console.log(import.meta.env.VITE_APP_CONTEXT); // 打印出 lsbdb
// console.log(import.meta.env.VITE_APP_AGE); // 打印出 lsbdb
// console.log(import.meta.env.VITE_APP_NAME); // 打印出 lsbdb


const add = process.env

add.VITE_APP_NAME = import.meta.env.VITE_APP_NAME
console.log(add.VITE_APP_NAME);


// console.log(add.indexOf("HUANGBIAO123") );

createApp(App).use(router).use(store).mount("#app");

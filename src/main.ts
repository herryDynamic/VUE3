import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import store from "./store/index";
import './index.scss'
// console.log(import.meta.env.VITE_APP_CONTEXT); // 打印出 lsbdb
// console.log(import.meta.env.VITE_APP_AGE); // 打印出 lsbdb
// console.log(import.meta.env.VITE_APP_NAME); // 打印出 lsbdb


const add = process.env

import  './utils/http/axios'

import './utils/http/http'

import api from  './api/api'

import installElementPlus from "./plugins/element-plus";





createApp(App).use(router).use(store).use(installElementPlus).mount("#app");

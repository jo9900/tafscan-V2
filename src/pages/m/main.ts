import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import store from '@/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'animate.css/animate.min.css'
import i18n from '@/locales'
import { useI18n } from 'vue-i18n'
import {
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faInfoCircle,
)
createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");

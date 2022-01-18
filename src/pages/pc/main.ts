import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import store from '@/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'animate.css/animate.min.css'
import i18n from '@/locales'
import { useI18n } from 'vue-i18n'
import BalmUI from 'balm-ui' // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus' // BalmJS Team Material Components
import 'balm-ui-css'
import {
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faInfoCircle,
)
createApp(App)
  .use(BalmUI, {
    $theme: {
      primary: '#000000',
    },
  })
  .use(BalmUIPlus)
  .use(store)
  .use(router)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");

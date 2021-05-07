import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap CSS
import './assets/css/vendor/bootstrap.min.css'

// Icon Font CSS
import './assets/css/vendor/plazaicon.css'
import './assets/css/vendor/themify-icons.css'
import './assets/css/vendor/font-awesome.min.css'

// CSS Plugins
import './assets/css/plugins/animate.css'
import './assets/css/plugins/swiper-bundle.min.css'
import './assets/css/plugins/select2.min.css'

// Helper CSS
import './assets/css/helper.css'

//Main Style CSS
import './assets/css/style.css'

//Use the minified version files listed below for better performance and remove the files listed above
//<link rel="stylesheet" href="assets/css/plugins-min/plugins.min.css">
//<link rel="stylesheet" href="assets/css/style.min.css">


//JS

//Modernizer JS
import './assets/js/vendor/modernizr-3.6.0.min.js'

//jQuery JS
//window.$ = window.jQuery = require('./assets/js/vendor/jquery-3.3.1.min.js');
//import jQuery from  './assets/js/vendor/jquery-3.3.1.min.js'

//Bootstrap JS
import './assets/js/vendor/popper.min.js'
import './assets/js/vendor/bootstrap.min.js'

//Plugins JS
import './assets/js/plugins/swiper-bundle.min.js'
import './assets/js/plugins/jquery.countdown.min.js'
import './assets/js/plugins/jquery.elevateZoom.min.js'
import './assets/js/plugins/select2.min.js'
import './assets/js/plugins/ajax-contact.js'


//Use the minified version files listed below for better performance and remove the files listed above
//<!-- <script src="assets/js/plugins.min.js"></script>

//Main JS
import './assets/js/main.js'

import i18n from './i18n'

//Google Map js
{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54"></script>
import './assets/js/map-script.js' */}



createApp(App).use(i18n).use(i18n).use(store).use(router).mount('#app')

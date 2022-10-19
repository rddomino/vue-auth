import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './theme.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC2T-rs4I2oEM2rzziZ3O8kGwpq3RbwFBM",
    authDomain: "vue-auth-7c9ea.firebaseapp.com",
    projectId: "vue-auth-7c9ea",
    storageBucket: "vue-auth-7c9ea.appspot.com",
    messagingSenderId: "553822304487",
    appId: "1:553822304487:web:f940138b6747323a948a42"
}

initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')



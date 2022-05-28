import { createApp, onUnmounted, ref, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app";
import { initializeApp } from 'firebase'; 
import Vue from 'vue'



const firebaseConfig = {
  apiKey: "AIzaSyAYb61nJSuyzsTzYB4cF9pqYKVnKDMx2ns",
  authDomain: "webcam-55204.firebaseapp.com",
  projectId: "webcam-55204",
  storageBucket: "webcam-55204.appspot.com",
  messagingSenderId: "861709132966",
  appId: "1:861709132966:web:89bc1b9e70fa208d5ac067"
};


firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')

// ja nastavio

new Vue({
  el: '#app',
  render: h => h(App)
})
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import firebase from "firebase/app";
import Vue from 'vue'




const firebaseConfig = {
  apiKey: "AIzaSyAZgbGIUgffqn-rV18hMxzf1H9EYxLriqU",
  authDomain: "webcam-295f3.firebaseapp.com",
  projectId: "webcam-295f3",
  storageBucket: "webcam-295f3.appspot.com",
  messagingSenderId: "70566785669",
  appId: "1:70566785669:web:49863417038c85f2cfefec",
  measurementId: "G-DWS2X7MZTW"
};


firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')



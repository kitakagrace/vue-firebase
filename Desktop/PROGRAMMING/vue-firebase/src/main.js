import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyCmo3Rivq-uUFQ7bhwiuYA7d1PTgfISLKE",
  
    authDomain: "simplified-8bb49.firebaseapp.com",
  
    databaseURL: "https://simplified-8bb49.firebaseio.com",
  
    projectId: "simplified-8bb49",
  
    storageBucket: "simplified-8bb49.appspot.com",
  
    messagingSenderId: "626077542195",
  
    appId: "1:626077542195:web:5481452eacdc033c08c046"
  
  };
  
initializeApp(firebaseConfig);
  
const app = createApp(App)

app.use(router)

app.mount('#app')


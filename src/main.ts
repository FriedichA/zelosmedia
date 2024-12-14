import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBKtkEjzZWYlu8qCGWOdqRYHuD27zxyrj4",
  authDomain: "zelosmedia-corporate.firebaseapp.com",
  projectId: "zelosmedia-corporate",
  storageBucket: "zelosmedia-corporate.firebasestorage.app",
  messagingSenderId: "273515829759",
  appId: "1:273515829759:web:378d86712f69f1ae762fca",
  measurementId: "G-WEFFYVYWRM"
};

registerSwiperElements();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

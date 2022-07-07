import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
const firebaseConfig = {
  apiKey: 'AIzaSyDryMPtjnHKtvEjlZH6PATMjGHVuifYSOM',
  authDomain: 'scraping-63305.firebaseapp.com',
  databaseURL: 'https://scraping-63305-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'scraping-63305',
  storageBucket: 'scraping-63305.appspot.com',
  messagingSenderId: '148721585978',
  appId: '1:148721585978:web:e19751295d14819d978a03',
}
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default database


import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC4BmJmUbuScvS8thUE0nFgkKYfgVbBFCI",
  authDomain: "notes-4ffab.firebaseapp.com",
  databaseURL: "https://notes-4ffab.firebaseio.com",
  projectId: "notes-4ffab",
  storageBucket: "notes-4ffab.appspot.com",
  messagingSenderId: "836432019887",
  appId: "1:836432019887:web:fe9d404739e254912def5a",
  measurementId: "G-P1D31QCLJQ"
};

firebase.initializeApp(firebaseConfig);

Vue.use(CKEditor)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

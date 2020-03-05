import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyBGxfJYkSgZpxSNt-2MQUl7ud6Jeh8RSkg",
  authDomain: "evernote-clone-13f5b.firebaseapp.com",
  databaseURL: "https://evernote-clone-13f5b.firebaseio.com",
  projectId: "evernote-clone-13f5b",
  storageBucket: "evernote-clone-13f5b.appspot.com",
  messagingSenderId: "60791764156",
  appId: "1:60791764156:web:93497322b789449dd50cb9"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

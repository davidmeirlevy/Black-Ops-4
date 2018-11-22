import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAOzEkQ8vpjKbsw5mqnFFmr4qML-bVbCeI",
    authDomain: "call-of-duty-black-ops-4-15a24.firebaseapp.com",
    databaseURL: "https://call-of-duty-black-ops-4-15a24.firebaseio.com",
    projectId: "call-of-duty-black-ops-4-15a24",
    storageBucket: "call-of-duty-black-ops-4-15a24.appspot.com",
    messagingSenderId: "518851485397"
};
    firebase.initializeApp(config);


ReactDOM.render(<App/>,document.getElementById('root'));
import React, { Component } from 'react';
import firebase from '@firebase/app';
import Root from './src/components/Root';
//test
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBS-Sjz3jgUvSs4scOwd_ih9weKsjnRWD0",
    authDomain: "wildify-926ea.firebaseapp.com",
    databaseURL: "https://wildify-926ea.firebaseio.com",
    projectId: "wildify-926ea",
    storageBucket: "wildify-926ea.appspot.com",
    messagingSenderId: "813035770457"
  });
  }

  render() {
    return (
      <Root />
    );
  }
}

export default App;

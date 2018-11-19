import React, { Component } from 'react';
import firebase from 'firebase';
import Root from './src/components/Root';
//test
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDuGZB-7w5lxpEd3AZnuBrslvFydaSDSAk',
    authDomain: 'authentication-5b723.firebaseapp.com',
    databaseURL: 'https://authentication-5b723.firebaseio.com',
    projectId: 'authentication-5b723',
    storageBucket: 'authentication-5b723.appspot.com',
    messagingSenderId: '757229173065'
  });
  }

  render() {
    return (
      <Root />
    );
  }
}

export default App;

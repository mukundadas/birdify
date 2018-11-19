import React, { Component } from 'react';
import { Text, Image, View,
         KeyboardAvoidingView, StatusBar,
         TextInput, TouchableOpacity,
         Alert, Linking, Keyboard, PixelRatio }
from 'react-native';
import firebase from 'firebase';
import { Spinner } from '../common';

const iconImg = require('../../images/birdify_logo.png');

export default class Login extends Component {
  state = { email: '', password: '', error: '', loading: false, loggedIn: true };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.onLoginSuccess();
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogInPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    Keyboard.dismiss();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
     .catch(this.onLoginFail.bind(this));
  }

  onSignUpPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    Keyboard.dismiss();
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
     .catch(this.onLoginFail.bind(this));
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    this.props.navigation.navigate('levelsDash');
  }

  loadingSpinner() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
  }

  forgotPassword() {
    firebase.auth().sendPasswordResetEmail(this.state.email)
    .then(Alert.alert('Reset Email has been sent to your Email ID!'))
     .catch(this.forgotPasswordFail.bind(this));
  }

  forgotPasswordFail() {
    Alert.alert('Please enter a valid Email ID!');
  }

  render() {
    if (!this.state.loggedIn) {
   return (
    <KeyboardAvoidingView style={styles.mainContainer}>
    <View style={styles.mainContainer}>
     <View style={styles.logoContainer}>
      <Image
       style={styles.logo}
       source={iconImg}
      />
      <Text style={styles.text}>Welcome to Birdify!</Text>
     </View>
     <View style={styles.container}>
     <View style={styles.container}>
      <StatusBar
       barStyle="light-content"
      />
      <TextInput
       placeholder="user@email.com"
       returnKeyType="next"
       onSubmitEditing={() => this.passwordInput.focus()}
       underlineColorAndroid='rgba(0,0,0,0)'
       keyboardType="email-address"
       autoCapitalize="none"
       autoCorrect={false}
       style={styles.input}
       value={this.state.email}
       onChangeText={email => this.setState({ email })}
      />

      <TextInput
      placeholder="password"
      underlineColorAndroid='rgba(0,0,0,0)'
      style={styles.input}
      secureTextEntry
      returnKeyType="go"
      ref={(input) => this.passwordInput = input }
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      />

      <Text style={styles.errorTextStyle}>
       {this.state.error}
      </Text>

      <TouchableOpacity
       style={styles.logInContainer}
       onPress={this.onLogInPress.bind(this)}
      >
       <Text style={styles.buttonText}>LOG IN</Text>
     </TouchableOpacity>

     <TouchableOpacity
      style={styles.signUpContainer}
      onPress={this.onSignUpPress.bind(this)}
     >
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={this.forgotPassword.bind(this)}>
     <Text style={styles.iOStext}>Forgot password?</Text>
   </TouchableOpacity>

    {this.loadingSpinner()}

     </View>
     </View>
     </View>
     <View style={styles.credview}>
 <Text style={styles.credtext}>© Birdify 2018</Text>
 <Text style={styles.credtext}>A DBMS project by:</Text>
 <Text style={styles.credtext}>Mehul,Mukunda,Vadiraj,Abhi,Ruthwik</Text>
      </View>
    </KeyboardAvoidingView>

  );
 }
 return (
   <View style={styles.spinnerStyle}>
    <Spinner size='large' />
    <Image source={iconImg} style={{ bottom: 100 }} />
   </View>
  );
}
}
const f = PixelRatio.getFontScale();
const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: f * 20,
    marginTop: f * 20,
    justifyContent: 'center'
  },
  logo: {
    width: f * 100,
    height: f * 100
  },
  text: {
    color: '#fff',
    marginTop: f * 10,
    fontSize: f * 26,
    backgroundColor: 'transparent'
  },
  container: {
    padding: f * 15
  },
  input: {
    height: f * 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: f * 10,
    color: '#fff',
    paddingHorizontal: f * 10,
    fontSize: f * 18,
    borderRadius: f * 10
  },
  logInContainer: {
    backgroundColor: 'red',
    paddingVertical: f * 15,
    marginBottom: f * 15,
    marginTop: f * 5,
    borderRadius: f * 10
  },
  signUpContainer: {
    backgroundColor: 'red',
    paddingVertical: f * 15,
    marginBottom: f * 15,
    marginTop: 0,
    borderRadius: f * 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: f * 18
  },
  errorTextStyle: {
    fontSize: f * 20,
    alignSelf: 'center',
    color: 'red'
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  iOStext: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  credtext: {
   textAlign: 'center',
   marginLeft: f * 10,
   marginRight: f * 10,
   fontSize: f * 10,
   color: 'white'
 },
 credview: {
      marginBottom: f * 10
 }
};

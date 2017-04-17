import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBDlerFMOJsbM3Gfss1xu3wlr0f0CPcC1Y',
      authDomain: 'manager-40bdd.firebaseapp.com',
      databaseURL: 'https://manager-40bdd.firebaseio.com',
      projectId: 'manager-40bdd',
      storageBucket: 'manager-40bdd.appspot.com',
      messagingSenderId: '1043547898167'
    };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <LoginForm />
      </Provider>
    );
  }
}
export default App;

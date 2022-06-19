import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//Redux
import {Provider} from 'react-redux';
import configureStore from './store';
const store = configureStore();
// Debug
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

const AppWithReduxStore = () => {
  return (
    <Provider store={store}>
      <FlipperAsyncStorage />
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithReduxStore);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {store} from './manger';
import {Provider} from 'react-redux';
import LoginView from './views/LoginView';

export default function App() {
  // console.log('Rendering app...');
  return (
    <Provider store={store}>
      <LoginView />
    </Provider>
  );
}

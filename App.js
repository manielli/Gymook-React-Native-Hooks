import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import AppRouter from './AppRouter'

const { store } = configureStore()

export default function App() {
  return (
    <Provider store={store} >
      <AppRouter />
    </Provider>
  );
}

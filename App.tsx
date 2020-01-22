import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { AppContainer } from './screens/index';

const App = () => {
  const { store } = configureStore();
  return (
    <>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </>
  );
};

export default App;

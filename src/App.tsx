import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Stack from './navigation/MainStack';

const App = () => {
  return (
    <Provider store={store}>
        <Stack />
    </Provider>
  );
};

export default App;

import React, { Component } from 'react';
import Routing from './Route';
import {Provider} from 'react-redux';
import store from './application/store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

export default App;

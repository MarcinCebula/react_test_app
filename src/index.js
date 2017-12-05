import React from 'react';
import ReactDOM from 'react-dom';
import App from './app1/app';


ReactDOM.render(<App />, document.getElementById('root'));




// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app1/app.js', () => {
    const NextApp = require('./app1/app').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}

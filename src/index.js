import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './app';
import AppLocale from './languageProvider';

ReactDOM.render(<App />, document.getElementById('root'));




// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app.js', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
export { AppLocale };

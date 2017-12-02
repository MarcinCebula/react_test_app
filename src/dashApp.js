import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import PublicRoutes from './router';

const DashApp = () => (
  <Provcider store={store}>
    <PublicRoutes history={history} />
  </Provider>
);

export default DashApp;

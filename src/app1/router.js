import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';

const PublicRoutes = ({ history }) => {
  const url = 'app1'
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/app1'}
          component={App}
        />
      </div>
    </ConnectedRouter>
  );
};

export default connect(state => ({}))(PublicRoutes);

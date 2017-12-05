import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import App1 from './app1/containers/App/App';
import App2 from './app2/containers/App/App';
import asyncComponent from './app1/helpers/AsyncFunc';

const PublicRoutes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/'}
          component={App}
        />
        <Route
          exact
          path="/app1"
          component={App1}

        />
        <Route
          exact
          path="/app2"
          component={App2}
        />
      </div>
    </ConnectedRouter>
  );
};

export default connect(state => ({}))(PublicRoutes);

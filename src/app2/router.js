import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';

const PublicRoutes = ({ history }) => {
  const url = 'app2'
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/xx2'}
          component={App}
        />
      </div>
    </ConnectedRouter>
  );
};

export default connect(state => ({}))(PublicRoutes);

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/meetup`}
          component={asyncComponent(() => import('../Meetup/index.js'))}
        >
        </Route>

      </Switch>
    );
  }
}

export default AppRouter;

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
        <Route
          exact
          path={`${url}/forms`}
          component={asyncComponent(() => import('../Meetup/index.js'))}
        >
        </Route>

        <Route
          exact
          path={`${url}/inquiries`}
          component={asyncComponent(() => import('../Meetup/index.js'))}
        >
        </Route>

        <Route
          exact
          path={`${url}/form-builder`}
          component={asyncComponent(() => import('../Meetup/index.js'))}
        >
        </Route>

        <Route
          exact
          path={`${url}/froms`}
          component={asyncComponent(() => import('../Meetup/index.js'))}
        >
        </Route>

      </Switch>
    );
  }
}

export default AppRouter;

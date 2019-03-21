import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LOGIN } from 'constants/paths';

const ProtectedRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    render={() => (
      <Fragment>
        { true
          ? <Component />
          : <Redirect to={{ pathname: LOGIN }} />
        }
      </Fragment>
    )}
  />
);

export default ProtectedRoute;

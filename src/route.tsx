import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

import { RouterProtectedContextConsumer } from './context';

const ProtectedRoute = (props: RouteProps) => {
  const Component = props.component;
  const render = props.children
    ? undefined
    : routeProps => (
        <RouterProtectedContextConsumer>
          {redirect =>
            redirect ? (
              <Redirect to={redirect} />
            ) : Component ? (
              <Component {...routeProps} />
            ) : (
              props.render(routeProps)
            )
          }
        </RouterProtectedContextConsumer>
      );

  return <Route render={render} {...props} />;
};

export default ProtectedRoute;

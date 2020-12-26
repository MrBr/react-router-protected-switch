import React, { useCallback } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

import { SwitchContextConsumer } from './context';

const ProtectedRoute = (props: RouteProps) => {
  const Component = props.component;
  const render = useCallback(
    routeProps => (
      <SwitchContextConsumer>
        {redirect =>
          redirect ? (
            <Redirect to={redirect} />
          ) : Component ? (
            <Component {...routeProps} />
          ) : (
            props.render(routeProps)
          )
        }
      </SwitchContextConsumer>
    ),
    [props.render, Component],
  );
  return <Route render={render} {...props} />;
};

export default ProtectedRoute;

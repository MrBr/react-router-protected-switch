import React, { useCallback } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

import { SwitchContextConsumer } from './context';

const ProtectedRoute = ({ render, component, ...props }: RouteProps) => {
  const Component = component;
  const protectedRender = useCallback(
    routeProps => (
      <SwitchContextConsumer>
        {redirect =>
          redirect ? (
            <Redirect to={redirect} />
          ) : Component ? (
            <Component {...routeProps} />
          ) : (
            render(routeProps)
          )
        }
      </SwitchContextConsumer>
    ),
    [render, Component],
  );
  return <Route render={protectedRender} {...props} />;
};

export default ProtectedRoute;

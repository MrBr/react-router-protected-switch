# React Router Protected Switch

A generic way for protecting/scoping react router routes with zero dependencies.

## Installation

`yarn add react-router-protected-switch`

## The problem

There are few common mistakes done with custom protected routes which this library aims to resolve.
* Validation happens even when the path isn't matched
* Validation is strongly related to the authorization
* Validation can't be scoped to the subtree

## The solution
By connecting `Route` with `SwitchContext` we get the new `ProtectedRoute` component which doesn't change the `Route` 
props interface (remains agnostic regarding protection; doesn't require any) but to redirect unwanted visits.

## API
* `SwitchContext` - the context provider for the custom switch components
* `switchContext` - under the hood context
* `SwitchContextConsumer` - the context consumer for the custom protected routes
* `useSwitchContext` - useful for creating custom protected routes


## Usage example:
Switch component:
```
const AuthSwitch = ({ isAuthenticated, children }) => {
  const redirect = !isAuthenticated && '/login';

  return (
    <SwitchContext value={redirect}>
      {children}
    </SwitchContext>
  );
};
```

In the Router tree:
```
<Router>
  <AuthSwitch>
    // Scoped validation - all routes under the AuthSwitch are protected 
    <ProtectedRoute component={SafePage} path="/safe-page">
  </AuthSwitch>
  // Routes outside the switch behave normally
  <ProtectedRoute component={LoginPage} path="/login">
</Router>
```

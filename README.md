# React Router Protected Context

A generic way for protecting/scoping react router routes.

## The problem

There are few common mistakes done with custom protected routes which this library aims to resolve.
* Validation happens even when the path isn't matched
* Validation is strongly related to the authorization
* Validation can't be scoped to the subtree

## The solution
By connecting `Route` with `RouterProtectedContext` we get the new `ProtectedRoute` component which doesn't change the `Route` 
props interface (remains agnostic about protection; doesn't require any) and still has ability to protected itself from 
unwanted visits.

## Usage example:
Validator component:
```
const AuthValidator = ({ isAuthenticated, children }) => {
  const redirect = !isAuthenticated && '/login';

  return (
    <RouterProtectedContextProvider value={redirect}>
      {children}
    </RouterProtectedContextProvider>
  );
};
```

In the Router tree:
```
<Router>
  <AuthValidator>
    // Scoped validation - all routes under the AuthValidator are protected 
    <ProtectedRoute component={SafePage} path="/safe-page">
  </AuthValidator>
  // Routes outside the validator behave normally
  <ProtectedRoute component={LoginPage} path="/login">
</Router>
```

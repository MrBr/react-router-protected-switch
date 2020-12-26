import React, { ReactNode } from 'react';

export type RouterProtectedContextValue = null | string;

export interface RouterProtectedContextProviderProps {
  children: ReactNode;
  value: RouterProtectedContextValue;
}

const RouterProtectedContext = React.createContext<RouterProtectedContextValue>(
  null,
);

const RouterProtectedContextProvider = ({
  children,
  value,
}: RouterProtectedContextProviderProps) => (
  <RouterProtectedContext.Consumer>
    {parentRedirect => (
      <RouterProtectedContext.Provider value={parentRedirect || value}>
        {children}
      </RouterProtectedContext.Provider>
    )}
  </RouterProtectedContext.Consumer>
);

const RouterProtectedContextConsumer = RouterProtectedContext.Consumer;

export { RouterProtectedContextProvider, RouterProtectedContextConsumer };

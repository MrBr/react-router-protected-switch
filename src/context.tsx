import React, { ReactNode, useContext } from 'react';

export type SwitchContextValue = null | string;

export interface SwitchContextProps {
  children: ReactNode;
  value: SwitchContextValue;
}

const switchContext = React.createContext<SwitchContextValue>(null);

const SwitchContext = ({ children, value }: SwitchContextProps) => (
  <switchContext.Consumer>
    {parentRedirect => (
      <switchContext.Provider value={parentRedirect || value}>
        {children}
      </switchContext.Provider>
    )}
  </switchContext.Consumer>
);

const SwitchContextConsumer = switchContext.Consumer;

const useSwitchContext = () => {
  return useContext(switchContext);
};

export {
  SwitchContextConsumer,
  SwitchContext,
  switchContext,
  useSwitchContext,
};

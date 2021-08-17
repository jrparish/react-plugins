import React, { useMemo, ReactNode } from 'react';
import { PluginStore } from '../utils/store';

interface ProviderContextType {
  store: PluginStore;
}

export const ProviderContext = React.createContext<ProviderContextType>(
  {} as ProviderContextType
);

interface PluginStoreProviderProps extends ProviderContextType {
  children?: ReactNode;
}

export function PluginStoreProvider({
  children,
  store
}: PluginStoreProviderProps) {
  const contextValues = useMemo(
    () => ({
      store
    }),
    [store]
  );

  return (
    <ProviderContext.Provider value={contextValues}>
      {children}
    </ProviderContext.Provider>
  );
}

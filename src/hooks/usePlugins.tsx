import { useContext, useEffect, useCallback, useState } from 'react';
import { ProviderContext } from '../components/PluginStoreProvider';

export function usePlugins(section: string) {
  const { store } = useContext(ProviderContext);

  const getPlugins = useCallback(
    () => store.getPluginsForSection(section),
    [store]
  );

  const [plugins, setPlugins] = useState(getPlugins());

  useEffect(() => {
    const unsub = store.subscribe(() => {
      setPlugins(getPlugins());
    });
    return () => unsub();
  }, [store, getPlugins]);

  return plugins;
  // return useMemo(
  //   () =>
  //     plugins.map((component) => {
  //       if (React.isValidElement(component)) {
  //         return component as unknown as JSX.Element;
  //       } else {
  //         const Component = component as React.ComponentType<P | {}>;
  //         return <Component {...props} />;
  //       }
  //     }),
  //   [plugins]
  // );
}

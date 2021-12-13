import React from 'react';
import { usePlugins } from '../hooks/usePlugins';

interface PluginsProps {
  section: string;
}

export function Plugins<T extends {}>({
  section,
  ...rest
}: PluginsProps & T): JSX.Element {
  const plugins = usePlugins(section);

  return (
    <React.Fragment>
      {plugins.map(({ component: Component, props }, index) => (
        <Component key={`${section}-${index}`} {...props} {...rest} />
      ))}
    </React.Fragment>
  );
}

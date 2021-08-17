export type PluginType = {
  component: React.ComponentType;
  priority: number;
  name?: string;
};

export type PluginStoreType = {
  [key: string]: PluginType[];
};

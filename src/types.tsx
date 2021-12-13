import { ComponentType } from 'react';

export interface PluginType<P = any> {
  component: ComponentType<P>;
  priority: number;
  name?: string;
  props?: P;
}

export type PluginStoreType = Record<string, PluginType[]>;

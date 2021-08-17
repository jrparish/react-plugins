import { useContext } from 'react';
import { ProviderContext } from '../components/PluginStoreProvider';
import { PluginStore } from '../utils/store';

export function usePluginStore(): PluginStore {
  return useContext(ProviderContext).store;
}

import './index.css';

import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './pluginStore';
import { PluginStoreProvider } from '../src/index';

ReactDOM.render(
  <Suspense fallback='Loading...'>
    <PluginStoreProvider store={store}>
      <App />
    </PluginStoreProvider>
  </Suspense>,
  document.getElementById('root')
);

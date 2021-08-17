import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { act, render, screen } from '@testing-library/react';

import { Plugins } from './Plugins';
import { PluginStoreProvider } from './PluginStoreProvider';
import { PluginStore } from '../utils/store';

describe('Plugins', () => {
  let store: PluginStore;
  beforeEach(() => {
    store = new PluginStore();
  });
  it('Renders the plugins from the given section', async () => {
    const component1 = () => <p data-testid='component1'>I'm component 1</p>;
    const Component2 = () => <p data-testid='component2'>I'm component 2</p>;

    store.registerPlugin('test', component1, 'first', 0);

    const { getByTestId } = render(
      <PluginStoreProvider store={store}>
        <Plugins section='test' />
      </PluginStoreProvider>
    );

    expect(() => getByTestId('component1')).not.toThrow();
    expect(() => getByTestId('component2')).toThrow();

    act(() => {
      store.registerPlugin('test', Component2, 'second', 1);
    });

    expect(() => getByTestId('component1')).not.toThrow();
    expect(() => getByTestId('component2')).not.toThrow();
  });

  it('Renders the plugins from the given section with props', async () => {
    const component1 = (props = {}) => (
      <p data-testid='component1' {...props}>
        I'm component 1
      </p>
    );

    store.registerPlugin('test', component1, 'first', 0);

    const { rerender } = render(
      <Plugins section='test' data-testprop='testValue' />,
      {
        wrapper: (props) => (
          <PluginStoreProvider store={store}>
            {props.children}
          </PluginStoreProvider>
        )
      }
    );

    expect(screen.getByTestId('component1')).toHaveAttribute(
      'data-testprop',
      'testValue'
    );

    rerender(<Plugins section='test' data-testprop='changed' />);

    expect(screen.getByTestId('component1')).toHaveAttribute(
      'data-testprop',
      'changed'
    );
  });
});

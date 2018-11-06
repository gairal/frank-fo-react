/* eslint-disable function-paren-newline,comma-dangle  */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import createStore from '@/store/createStore';
import Routes from '@/routes';
import LayoutWith, { Layout as DumbLayout } from '@/components/core/Layout';

describe('components > core > Layout', () => {
  const store = createStore();
  const routes = new Routes(store);

  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <LayoutWith store={store} routes={routes} />
      </Router>
    </Provider>,
  );

  it('Renders correctly default', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Can toggle drawer', () => {
    const dumbComponent = component.root.findByType(DumbLayout);
    dumbComponent.instance.toggleDrawer();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

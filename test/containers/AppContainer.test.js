/* eslint-disable function-paren-newline,comma-dangle  */
import React from 'react';
import renderer from 'react-test-renderer';
import createStore from '@/store/createStore';
import AppContainer from '@/containers/AppContainer';

describe('containers > AppContainer', () => {
  const store = createStore();
  let component;
  beforeAll(() => {
    component = renderer.create(<AppContainer store={store} />);
  });

  it.skip('Renders correctly default', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/* eslint-disable function-paren-newline,comma-dangle  */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '@/components/core/Header';

describe('components > core > Header', () => {
  const component = renderer.create(
    <Router>
      <Header
        toggleDrawer={jest.fn}
      />
    </Router>);

  it('Renders correctly default', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Updates it\'s title', () => {
    component.root.instance.history.push('/skills');
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

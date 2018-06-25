/* eslint-disable function-paren-newline,comma-dangle  */
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderMenu from '@/components/core/Header/HeaderMenu';

describe('components > core > Header > HeaderMenu', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(<HeaderMenu />);
  });

  it('Renders correctly default', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

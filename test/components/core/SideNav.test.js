/* eslint-disable function-paren-newline,comma-dangle  */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SideNav from '@/components/core/SideNav';

describe('components > core > SideNav', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(
      <BrowserRouter>
        <SideNav
          mobileOpen
          toggleDrawer={jest.fn}
          routes={
            [
              {
                key: 'skills',
                icon: 'build',
                path: 'categories',
              },
            ]
          }
        />
      </BrowserRouter>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

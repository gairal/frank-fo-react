import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '@/components/core/Loader';

describe('components > core > Loader', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(<Loader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Appears when request fetching', () => {
    const component = renderer.create(<Loader isFetching />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly linear', () => {
    const component = renderer.create(<Loader type="linear" isFetching />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly circular', () => {
    const component = renderer.create(<Loader type="circular" isFetching />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import LLoader from '@/components/core/Loader/LLoader';

describe('components > core > LLoader', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<LLoader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('Appears when request fetching', () => {
  //   let component = renderer.create(<Loader />);
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();

  //   component = renderer.create(<Loader isFetching />);
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});

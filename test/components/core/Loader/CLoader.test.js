import React from 'react';
import renderer from 'react-test-renderer';
import CLoader from '@/components/core/Loader/CLoader';

describe('components > core > CLoader', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<CLoader />);
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

import React from 'react';
import renderer from 'react-test-renderer';
import XpCard from '@/components/core/XpCard';

describe('components > core > XpCard', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(<XpCard img="test" name="test" title="test" date_in="test" place="test" subHeadline="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

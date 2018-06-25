import React from 'react';
import renderer from 'react-test-renderer';
import Map from '@/components/Interest/Map';

describe('components > Interest > Map', () => {
  jest.useFakeTimers();
  const component = renderer.create(<Map
    travels={[
      {
        place: 'test',
        coordinates: {
          Lat: 0.12,
          Lng: 1.3,
        },
      },
    ]}
  />);

  it('Renders correctly default', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Will update its markers', () => {
    component.root.instance.travel(0);
    expect(component.root.instance.state.zoom).toEqual(8);
    expect(component.root.instance.state.markers).toEqual([{
      lat: 0.12,
      lng: 1.3,
    }]);

    component.root.instance.travel(1);
    expect(component.root.instance.state.zoom).toEqual(2);

    component.unmount();
  });
});

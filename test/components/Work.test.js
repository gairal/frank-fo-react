import React from 'react';
import renderer from 'react-test-renderer';
import Work from '@/components/Work';

describe('components > Work', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(<Work
      load={jest.fn}
      works={[
        {
          name: 'test',
          title: 'test',
          place: 'test',
          date_in: '2018-01-01',
          description: 'test',
          image: { name: 'test' },
        },
      ]}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

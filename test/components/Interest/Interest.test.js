import React from 'react';
import renderer from 'react-test-renderer';
import Interest from '@/components/Interest';

describe('components > Interest', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(<Interest
      load={jest.fn}
      interests={[{ name: 'test' }]}
      travels={[
        {
          place: 'test',
        },
      ]}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly with interests', () => {
    const component = renderer.create(<Interest
      load={jest.fn}
      interests={[
        {
          name: 'test',
          interests: [
            {
              name: 'test',
              title: 'test',
              place: 'test',
              date_in: '2018-01-01',
              description: 'test',
              image: { name: 'test' },
            },
          ],
        },
      ]}
      travels={[
        {
          place: 'test',
        },
      ]}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

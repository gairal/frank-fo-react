import React from 'react';
import renderer from 'react-test-renderer';
import Education from '@/components/Education';

describe('components > Education', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(
      <Education
        load={jest.fn}
        educations={[
          {
            name: 'test',
            diploma: 'test',
            place: 'test',
            year_in: '2018-01-01',
            description: 'test',
            short_description: 'test',
            image: { name: 'test' },
          },
        ]}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

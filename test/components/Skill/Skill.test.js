import React from 'react';
import renderer from 'react-test-renderer';
import Skill from '@/components/Skill';

describe('components > Skill', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(
      <Skill load={jest.fn} skills={[{ name: 'test' }]} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly with categories', () => {
    const component = renderer.create(
      <Skill
        load={jest.fn}
        skills={[
          {
            name: 'test',
            skills: [
              {
                name: 'test1',
                description: 'test',
                level: 77,
              },
              {
                name: 'test2',
              },
            ],
          },
        ]}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

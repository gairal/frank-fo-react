import React from 'react';
import renderer from 'react-test-renderer';
import SkillCard from '@/components/Skill/SkillCard';

describe('components > Skill > SkillCard', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(<SkillCard category={{ name: 'test' }} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly with categories', () => {
    const component = renderer.create(<SkillCard
      category={{
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
      }}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

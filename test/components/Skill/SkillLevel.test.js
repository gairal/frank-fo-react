import React from 'react';
import renderer from 'react-test-renderer';
import SkillLevel from '@/components/Skill/SkillLevel';

describe('components > Skill > SkillLevel', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(<SkillLevel level={20} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

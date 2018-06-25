import React from 'react';
import renderer from 'react-test-renderer';
import SkillLevel from '@/components/Skill/SkillLevel';

describe('components > Skill > SkillLevel', () => {
  jest.useFakeTimers();
  const component = renderer.create(<SkillLevel level={20} />);
  it('Renders correctly default', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Will update its level', () => {
    jest.runAllTimers();
    expect(component.root.instance.state.progress).toEqual(20);
    component.unmount();
  });
});

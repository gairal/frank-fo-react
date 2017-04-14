import CoreLayout from '../layouts/CoreLayout';
import Experience from './Experience';
import Skill from './Skill';
import Education from './Education';
import Interest from './Interest';

export const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Experience(store),
  childRoutes: [
    Experience(store),
    Skill(store),
    Education(store),
    Interest(store),
  ],
});

export default createRoutes;

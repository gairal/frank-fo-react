// import CoreLayout from '../layouts/CoreLayout';
import Work from './Work';
import Skill from './Skill';
import Education from './Education';
import Interest from './Interest';

export default store => [
  Work(store),
  Education(store),
  Skill(store),
  Interest(store),
];

// import CoreLayout from '../layouts/CoreLayout';
import Experience from './Experience';
import Skill from './Skill';
import Education from './Education';
import Interest from './Interest';

export default store => [
  Experience(store),
  Education(store),
  Interest(store),
];

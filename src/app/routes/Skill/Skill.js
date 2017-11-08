import AbstractRoute from '../AbstractRoute';
import component from '../../components/Skill';

export default class Work extends AbstractRoute {
  constructor(store) {
    super(store, 'skills', 'build', 'categories');
    this.component = component;
  }
}

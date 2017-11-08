import AbstractRoute from '../AbstractRoute';
import component from '../../components/Education';

export default class Work extends AbstractRoute {
  constructor(store) {
    super(store, 'educations');
    this.component = component;
  }
}

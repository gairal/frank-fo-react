import AbstractRoute from '../AbstractRoute';
import component from '../../components/Work';

export default class Work extends AbstractRoute {
  constructor(store) {
    super(store, 'works', 'work');
    this.component = component;
  }
}

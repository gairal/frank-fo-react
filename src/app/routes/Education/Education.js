import AbstractRoute from '../AbstractRoute';
import component from '../../components/Education';

export default class Work extends AbstractRoute {
  constructor(store) {
    super(store, 'educations', 'account_balance');
    this.component = component;
  }
}

import AbstractRoute from '../AbstractRoute';
import component from '../../components/Education';

export default class Work extends AbstractRoute {
  constructor(store) {
    super(store, 'educations', 'account_balance');
    this.component = component;

    this.ACTIONS = {
      FETCH_SUCCESS: 'EDU_FETCH_SUCCESS',
      FETCH_FAILURE: 'EDU_FETCH_FAILURE',
    };
    this.init();
  }

  // actions
  static success(json) {
    return {
      type: 'EDU_FETCH_SUCCESS',
      payload: {
        json,
      },
    };
  }

  static fail(err) {
    return {
      type: 'EDU_FETCH_FAILURE',
      payload: {
        err,
      },
    };
  }
}

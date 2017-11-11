import AbstractRoute from '../AbstractRoute';
import component from '../../components/Work';

export default class Work extends AbstractRoute {
  constructor(store) {
    super(store, 'works', 'work');
    this.component = component;

    this.ACTIONS = {
      FETCH: 'WORK_FETCH',
      FETCH_SUCCESS: 'WORK_FETCH_SUCCESS',
      FETCH_FAILURE: 'WORK_FETCH_FAILURE',
    };
    this.init();
  }

  // actions
  static request() {
    return {
      type: 'WORK_FETCH',
    };
  }

  static success(json) {
    return {
      type: 'WORK_FETCH_SUCCESS',
      payload: {
        json,
      },
    };
  }

  static fail(err) {
    return {
      type: 'WORK_FETCH_FAILURE',
      payload: {
        err,
      },
    };
  }
}

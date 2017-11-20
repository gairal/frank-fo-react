import AbstractRoute from '../AbstractRoute';
import component from '../../components/Skill';

export default class Work extends AbstractRoute {
  constructor(store) {
    super(store, 'skills', 'build', 'categories');
    this.component = component;

    this.ACTIONS = {
      FETCH_SUCCESS: 'SKILL_FETCH_SUCCESS',
      FETCH_FAILURE: 'SKILL_FETCH_FAILURE',
    };
    this.init();
  }

  // actions
  static success(json) {
    return {
      type: 'SKILL_FETCH_SUCCESS',
      payload: {
        json,
      },
    };
  }

  static fail(err) {
    return {
      type: 'SKILL_FETCH_FAILURE',
      payload: {
        err,
      },
    };
  }
}

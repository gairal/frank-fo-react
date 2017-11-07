import { connect } from 'react-redux';

import AbstractRoute from '../AbstractRoute';
import component from '../../components/Skill';

export default class Skill extends AbstractRoute {
  constructor(store) {
    super(store, 'skills', 'categories');
    this.initialState = {
      skills: [],
      isFetching: true,
    };

    this.component = component;
    this.mapDispatchToProps = {
      load: this.loadFactory(),
    };

    this.ACTION_HANDLERS = {
      [this.ACTIONS.FETCH]: state => ({
        ...state,
        isFetching: true,
      }),
      [this.ACTIONS.FETCH_SUCCESS]: (state, action) => ({
        ...state,
        skills: action.payload.skills,
        isFetching: false,
      }),
      [this.ACTIONS.FETCH_FAILURE]: state => ({
        ...state,
        isFetching: false,
      }),
    };
  }

  get connected() {
    return connect(state => ({
      skills: state.skills.skills,
      isFetching: state.skills.isFetching,
    }), this.mapDispatchToProps)(this.component);
  }

  static success(json) {
    return {
      type: 'FETCH_SUCCESS',
      payload: {
        skills: json,
      },
    };
  }

  loadFactory() {
    return () => AbstractRoute.load(this.API_URL, AbstractRoute.request, Skill.success);
  }
}

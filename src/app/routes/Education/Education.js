import { connect } from 'react-redux';

import AbstractRoute from '../AbstractRoute';
import component from '../../components/Education';

export default class Education extends AbstractRoute {
  constructor(store) {
    super(store, 'educations');
    this.initialState = {
      educations: [],
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
        educations: action.payload.works,
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
      works: state.educations.educations,
      isFetching: state.educations.isFetching,
    }), this.mapDispatchToProps)(this.component);
  }

  static success(json) {
    return {
      type: 'FETCH_SUCCESS',
      payload: {
        educations: json,
      },
    };
  }

  loadFactory() {
    return () => AbstractRoute.load(this.API_URL, AbstractRoute.request, Education.success);
  }
}

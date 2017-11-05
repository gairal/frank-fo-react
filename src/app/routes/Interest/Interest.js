import { connect } from 'react-redux';

import AbstractRoute from '../AbstractRoute';
import component from '../../components/Interest';

export default class Interest extends AbstractRoute {
  constructor(store) {
    super(store, 'interests');
    this.initialState = {
      interests: [],
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
        interests: action.payload.works,
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
      works: state.interests.interests,
      isFetching: state.interests.isFetching,
    }), this.mapDispatchToProps)(this.component);
  }

  static success(json) {
    return {
      type: 'FETCH_SUCCESS',
      payload: {
        interests: json,
      },
    };
  }

  loadFactory() {
    return () => AbstractRoute.load(this.API_URL, AbstractRoute.request, Interest.success);
  }
}

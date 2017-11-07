import { connect } from 'react-redux';

import AbstractRoute from '../AbstractRoute';
import component from '../../components/Interest';

export default class Interest extends AbstractRoute {
  constructor(store) {
    super(store, 'interests', 'categories');
    this.initialState = {
      interests: [],
      travels: [],
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
        interests: action.payload.interests,
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
      interests: state.interests.interests,
      travels: state.interests.travels,
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

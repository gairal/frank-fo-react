import { connect } from 'react-redux';

import AbstractRoute from '../AbstractRoute';
import component from '../../components/Work';

export default class Work extends AbstractRoute {
  constructor(store) {
    super(store, 'works');
    this.initialState = {
      works: [],
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
        works: action.payload.works,
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
      works: state.works.works,
      isFetching: state.works.isFetching,
    }), this.mapDispatchToProps)(this.component);
  }

  static success(json) {
    return {
      type: 'FETCH_SUCCESS',
      payload: {
        works: json,
      },
    };
  }

  loadFactory() {
    return () => AbstractRoute.load(
      this.API_URL, AbstractRoute.request, Work.success);
  }
}

import { connect } from 'react-redux';
import { injectReducer } from '../../store/reducers';

export default class AbstractRoute {
  constructor(store, key, path = '') {
    this.store = store;
    this.key = key;

    this.API_URL = `https://api-dot-com-gairal-frank.appspot.com/${this.key}/${path}`;

    this.initialState = {
      data: [],
      isFetching: true,
    };

    this.ACTIONS = {
      FETCH: 'FETCH',
      FETCH_SUCCESS: 'FETCH_SUCCESS',
      FETCH_FAILURE: 'FETCH_FAILURE',
    };

    this.ACTION_HANDLERS = {
      [this.ACTIONS.FETCH]: state => ({
        ...state,
        isFetching: true,
      }),
      [this.ACTIONS.FETCH_SUCCESS]: (state, action) => ({
        ...state,
        data: action.payload.json,
        isFetching: false,
      }),
      [this.ACTIONS.FETCH_FAILURE]: state => ({
        ...state,
        isFetching: false,
      }),
    };

    this.mapStateToProps = {
      [this.key]: 'data',
      isFetching: 'isFetching',
    };

    this.mapDispatchToProps = {
      load: this.loadFactory(),
    };
  }

  get connected() {
    return connect(state => Object.keys(this.mapStateToProps)
      .reduce((acc, e) => ({
        ...acc,
        [e]: state[this.key][this.mapStateToProps[e]],
      }), {}), this.mapDispatchToProps)(this.component);
  }

  get route() {
    injectReducer(this.store, { key: this.key, reducer: this.getReducer() });

    return {
      path: `/${this.key}`,
      component: this.connected,
    };
  }

  getReducer() {
    const initialState = this.initialState;
    const ACTION_HANDLERS = this.ACTION_HANDLERS;

    return (state = initialState, action) => {
      const handler = ACTION_HANDLERS[action.type];
      return handler ? handler(state, action) : state;
    };
  }

  static request() {
    return {
      type: 'FETCH',
      payload: {},
    };
  }

  static success(json) {
    return {
      type: 'FETCH_SUCCESS',
      payload: {
        json,
      },
    };
  }

  loadFactory() {
    const API_URL = this.API_URL;

    return () => (dispatch) => {
      dispatch(AbstractRoute.request());

      const fetchOptions = {
        method: 'GET',
      };

      return fetch(API_URL, fetchOptions)
        .then(response => response.json())
        .then(json => dispatch(AbstractRoute.success(json)));
    };
  }
}

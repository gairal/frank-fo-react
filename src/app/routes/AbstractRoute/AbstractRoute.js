import { connect } from 'react-redux';
import { injectReducer } from '../../store/reducers';

export default class AbstractRoute {
  constructor(store, key, icon, path = '') {
    this.store = store;
    this.key = key;
    this.icon = icon;

    this.API_URL = `https://com-gairal-frank-api.appspot.com/${this.key}/${path}`;

    this.initialState = {
      data: [],
      isFetching: true,
    };

    this.ACTIONS = {};
    this.ACTION_HANDLERS = {};

    this.mapStateToProps = {
      [this.key]: 'data',
      isFetching: 'isFetching',
    };
    this.mapDispatchToProps = {};
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
      key: this.key,
      icon: this.icon,
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

  // reducer functions
  static fetch(state) {
    return ({
      ...state,
      isFetching: true,
    });
  }

  static fetchSuccess(state, action) {
    return ({
      ...state,
      data: action.payload.json,
      isFetching: false,
    });
  }

  static fetchFail(state) {
    return ({
      ...state,
      isFetching: false,
    });
  }

  loadFactory() {
    const API_URL = this.API_URL;
    const request = this.constructor.request;
    const success = this.constructor.success;
    const fail = this.constructor.fail;

    return () => (dispatch) => {
      dispatch(request());

      const fetchOptions = {
        method: 'GET',
      };

      return fetch(API_URL, fetchOptions)
        .then(response => response.json())
        .then(json => dispatch(success(json)))
        .catch(err => dispatch(fail(err)));
    };
  }

  init() {
    this.ACTION_HANDLERS[this.ACTIONS.FETCH] = AbstractRoute.fetch;
    this.ACTION_HANDLERS[this.ACTIONS.FETCH_SUCCESS] = AbstractRoute.fetchSuccess;
    this.ACTION_HANDLERS[this.ACTIONS.FETCH_FAILURE] = AbstractRoute.fetchFail;

    this.mapDispatchToProps.load = this.loadFactory();
  }
}

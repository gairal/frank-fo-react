import { connect } from 'react-redux';
import { injectReducer } from '@/store/reducers';
import * as actions from '../containers/Loader';

export default class AbstractRoute {
  constructor(store, key, icon, path = '') {
    this.store = store;
    this.key = key;
    this.icon = icon;

    this.API_URL_BASE = 'https://api-dot-com-gairal-frank.appspot.com';
    this.API_URL = `${this.API_URL_BASE}/${this.key}/${path}`;

    this.initialState = {
      data: [],
    };

    this.ACTIONS = {};
    this.ACTION_HANDLERS = {};

    this.mapStateToProps = {
      [this.key]: 'data',
    };
    this.mapDispatchToProps = {};
  }

  get connected() {
    const mapStateToProps = state =>
      Object.keys(this.mapStateToProps).reduce(
        (acc, e) => ({
          ...acc,
          [e]: state[this.key][this.mapStateToProps[e]],
        }),
        {},
      );

    return connect(
      mapStateToProps,
      this.mapDispatchToProps,
    )(this.component);
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
    const { initialState, ACTION_HANDLERS } = this;

    return (state = initialState, action) => {
      const handler = ACTION_HANDLERS[action.type];
      return handler ? handler(state, action) : state;
    };
  }

  // reducer functions
  static fetchSuccess(state, action) {
    return {
      ...state,
      data: action.payload.json,
    };
  }

  static fetchFail(state) {
    return state;
  }

  loadFactory() {
    const { API_URL } = this;
    const { success, fail } = this.constructor;

    return () => dispatch => {
      dispatch(actions.showLoader());

      const fetchOptions = {
        method: 'GET',
      };

      return fetch(API_URL, fetchOptions)
        .then(response => response.json())
        .then(json => {
          dispatch(actions.hideLoader());
          return dispatch(success(json));
        })
        .catch(err => {
          dispatch(actions.hideLoader());
          return dispatch(fail(err));
        });
    };
  }

  init() {
    this.ACTION_HANDLERS[this.ACTIONS.FETCH_SUCCESS] =
      AbstractRoute.fetchSuccess;
    this.ACTION_HANDLERS[this.ACTIONS.FETCH_FAILURE] = AbstractRoute.fetchFail;

    this.mapDispatchToProps.load = this.loadFactory();
  }

  /**
   * Default export method
   *
   * @static
   * @param {*} store
   * @memberof AbstractRoute
   */
  static export(store) {
    return new this(store).route;
  }
}

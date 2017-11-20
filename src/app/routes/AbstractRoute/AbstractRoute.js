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
    };

    this.ACTIONS = {};
    this.ACTION_HANDLERS = {};

    this.mapStateToProps = {
      [this.key]: 'data',
    };
    this.mapDispatchToProps = {};
  }

  get connected() {
    const mapStateToProps = state => Object.keys(this.mapStateToProps)
      .reduce((acc, e) => ({
        ...acc,
        [e]: state[this.key][this.mapStateToProps[e]],
      }), {});

    return connect(mapStateToProps, this.mapDispatchToProps)(this.component);
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
  static fetchSuccess(state, action) {
    return ({
      ...state,
      data: action.payload.json,
    });
  }

  static fetchFail(state) {
    return state;
  }

  static showLoader() {
    return {
      type: 'LOADER_SHOW',
    };
  }

  static hideLoader() {
    return {
      type: 'LOADER_HIDE',
    };
  }

  loadFactory() {
    const API_URL = this.API_URL;
    const success = this.constructor.success;
    const fail = this.constructor.fail;

    return () => (dispatch) => {
      dispatch(AbstractRoute.showLoader());

      const fetchOptions = {
        method: 'GET',
      };

      return fetch(API_URL, fetchOptions)
        .then(response => response.json())
        .then((json) => {
          dispatch(success(json));
          return dispatch(AbstractRoute.hideLoader());
        })
        .catch((err) => {
          dispatch(fail(err));
          return dispatch(AbstractRoute.hideLoader());
        });
    };
  }

  init() {
    this.ACTION_HANDLERS[this.ACTIONS.FETCH_SUCCESS] = AbstractRoute.fetchSuccess;
    this.ACTION_HANDLERS[this.ACTIONS.FETCH_FAILURE] = AbstractRoute.fetchFail;

    this.mapDispatchToProps.load = this.loadFactory();
  }
}

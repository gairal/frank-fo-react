import { injectReducer } from '../../store/reducers';

export default class AbstractRoute {
  constructor(store, key) {
    this.store = store;
    this.key = key;
    this.initialState = {};
    this.API_URL = `https://api-dot-com-gairal-frank.appspot.com/${this.key}`;

    this.ACTIONS = {
      FETCH: 'FETCH',
      FETCH_SUCCESS: 'FETCH_SUCCESS',
      FETCH_FAILURE: 'FETCH_FAILURE',
    };
    this.ACTION_HANDLERS = {};
    this.mapDispatchToProps = {};
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

  static load(API_URL, request, receiveResponse) {
    return (dispatch) => {
      dispatch(request());

      const fetchOptions = {
        method: 'GET',
      };

      return fetch(API_URL, fetchOptions)
        .then(response => response.json())
        .then(json => dispatch(receiveResponse(json)));
    };
  }
}

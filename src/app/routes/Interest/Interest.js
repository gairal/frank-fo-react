import AbstractRoute from '../AbstractRoute';
import component from '../../components/Interest';

export default class Interest extends AbstractRoute {
  constructor(store) {
    super(store, 'interests', 'language', 'categories');
    this.component = component;
    this.initialState.travels = [];

    this.ACTIONS = {
      FETCH: 'INTEREST_FETCH',
      FETCH_SUCCESS: 'INTEREST_FETCH_SUCCESS',
      FETCH_FAILURE: 'INTEREST_FETCH_FAILURE',
    };

    this.init();
  }

  // actions
  static request() {
    return {
      type: 'INTEREST_FETCH',
    };
  }

  static success({ json, travels }) {
    return {
      type: 'INTEREST_FETCH_SUCCESS',
      payload: {
        json,
        travels,
      },
    };
  }

  static fail(err) {
    return {
      type: 'INTEREST_FETCH_FAILURE',
      payload: {
        err,
      },
    };
  }

  static fetchSuccess(state, action) {
    return ({
      ...state,
      data: action.payload.json,
      travels: action.payload.travels,
      isFetching: false,
    });
  }

  loadFactory() {
    const API_URLS = [
      this.API_URL,
      'https://com-gairal-frank-api.appspot.com/travels',
    ];

    return () => (dispatch) => {
      dispatch(Interest.request());

      const fetchOptions = {
        method: 'GET',
      };

      return Promise.all(API_URLS.map(url => fetch(url, fetchOptions)))
        .then(responses =>
          Promise.all(responses.map(res => res.json()))
            .then((jsons) => {
              const payload = jsons.reduce((acc, e) => {
                if (e[0].name) {
                  return { ...acc, json: e };
                }
                return { ...acc, travels: e };
              }, {});

              return dispatch(Interest.success(payload));
            }))
        .catch(err => dispatch(Interest.fail(err)));
    };
  }

  init() {
    super.init();

    this.ACTION_HANDLERS[this.ACTIONS.FETCH_SUCCESS] = Interest.fetchSuccess;
    this.mapStateToProps.travels = 'travels';
  }
}

import AbstractRoute from '../AbstractRoute';
import component from '../../components/Interest';

export default class Interest extends AbstractRoute {
  constructor(store) {
    super(store, 'interests', 'categories');
    this.component = component;
    this.initialState.travels = [];

    this.ACTION_HANDLERS[this.ACTIONS.FETCH_SUCCESS] = (state, action) => ({
      ...state,
      data: action.payload.json,
      travels: action.payload.travels,
      isFetching: false,
    });

    this.mapStateToProps.travels = 'travels';
  }

  static success({ json, travels }) {
    return {
      type: 'FETCH_SUCCESS',
      payload: {
        json,
        travels,
      },
    };
  }

  loadFactory() {
    const API_URLS = [
      this.API_URL,
      'https://api-dot-com-gairal-frank.appspot.com/travels',
    ];

    return () => (dispatch) => {
      dispatch(AbstractRoute.request());

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
            }));
    };
  }
}

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
// const STORE_KEY = 'Experiences';

const API_URL = 'http://api-dot-com-gairal-frank.appspot.com/experiences/';
// ------------------------------------
// Actions
// ------------------------------------
const request = (context, answer) => ({
  type: FETCH,
  payload: {
    context,
    answer,
  },
});

const receiveResponse = json => ({
  type: FETCH_SUCCESS,
  payload: {
    context: json.context,
    output: json.output,
  },
});

export const init = (context, answer) => (dispatch) => {
  dispatch(request(context, answer));

  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (context) {
    const body = {
      context,
    };
    if (answer) {
      body.input = {
        text: answer,
      };
    }
    fetchOptions.body = JSON.stringify(body);
  }

  return fetch(API_URL, fetchOptions)
    .then(response => response.json())
    .then(json => dispatch(receiveResponse(json)));
};

export const actions = {
  init,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [INIT]: (state, action) => {
    // const todos = [...state, {
    //   id: state.length + 1,
    //   title: action.payload.title,
    //   desc: action.payload.desc,
    // }];
    // localStorage.setItem(STORE_KEY, JSON.stringify(todos));

    // return todos;
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];
export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

// ------------------------------------
// Constants
// ------------------------------------
export const TODO_ADD = 'TODO_ADD';
export const TODO_REMOVE = 'TODO_REMOVE';
const STORE_KEY = 'TodoData';

// ------------------------------------
// Actions
// ------------------------------------
export function add(title, desc) {
  return {
    type: TODO_ADD,
    payload: {
      title,
      desc,
    },
  };
}

export function remove(id) {
  return {
    type: TODO_REMOVE,
    payload: {
      id,
    },
  };
}

export const actions = {
  add,
  remove,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TODO_ADD]: (state, action) => {
    const todos = [...state, {
      id: state.length + 1,
      title: action.payload.title,
      desc: action.payload.desc,
    }];
    localStorage.setItem(STORE_KEY, JSON.stringify(todos));

    return todos;
  },
  [TODO_REMOVE]: (state, action) => {
    const todos = state.filter(item => item.id !== action.payload.id);
    localStorage.setItem(STORE_KEY, JSON.stringify(todos));

    return todos;
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = JSON.parse(localStorage.getItem(STORE_KEY)) || [];
export default function todoReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

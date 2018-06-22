import { connect } from 'react-redux';
import { injectReducer } from '@/store/reducers';
import Loader from '@/components/core/Loader';

const LOADER_SHOW = 'LOADER_SHOW';
const LOADER_HIDE = 'LOADER_HIDE';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOADER_SHOW]: state => ({
    ...state,
    isFetching: true,
  }),
  [LOADER_HIDE]: state => ({
    ...state,
    isFetching: false,
  }),
};

const initialState = {
  title: '',
  mobileOpen: false,
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default (store, type) => {
  injectReducer(store, { key: 'loader', reducer });

  const mapStateToProps = state => ({
    isFetching: state.loader.isFetching,
    type,
  });

  return connect(mapStateToProps)(Loader);
};

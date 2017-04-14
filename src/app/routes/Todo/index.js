import { injectReducer } from '../../store/reducers';

export default store => ({
  path: 'todo',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Todo = require('./containers/TodoContainer').default;
      const reducer = require('./modules/todo').default;

      /*  Add the reducer to the store on key 'calc'  */
      injectReducer(store, { key: 'todo', reducer });

      /*  Return getComponent   */
      cb(null, Todo);

      /* Webpack named bundle   */
    }, 'todo');
  },
});
